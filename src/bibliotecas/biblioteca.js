class Biblioteca {
  constructor(
    librosDisponibles = [],
    librosPrestados = [],
    inventarioLibros = []
  ) {
    this._librosDisponibles = librosDisponibles;
    this._librosPrestados = librosPrestados;
    this._inventarioLibros = inventarioLibros; // inventario tiene todos los libros incluso los prestados
  }
  // Getters
  get librosDisponibles() {
    return this._librosDisponibles;
  }

  get librosPrestados() {
    return this._librosPrestados;
  }

  get inventarioLibros() {
    return this._inventarioLibros;
  }

  //metodo

  //inicial, agrega los libros nuevos a disponibles e inventario
  agregarNuevoLibroAInventario(libro) {
    this.librosDisponibles.push(libro);
    this.inventarioLibros.push(libro);
  }
  // agregamos con un push a su respectiva lista
  agregarLibroPrestado(libro) {
    this.librosPrestados.push(libro);
  }
  agregarLibroDisponible(libro) {
    this.librosDisponibles.push(libro);
  }

  listarLibrosdisponibles() {
    console.log("Libros disponibles:");
    console.log();
    this.listar(this.librosDisponibles);
  }
  listarLibrosPrestados() {
    console.log("Libros Prestados:");
    console.log();
    this.listar(this.librosPrestados);
  }
  listarLibrosEnInventario() {
    console.log("Libros En inventario:");
    console.log();
    this.listar(this.inventarioLibros);
  }

  listar(listaLibro = []) {
    for (let alibro of listaLibro) {
      console.log(alibro.toString());
      /*console.log(`Libro:${libro.titulo}`);
            console.log(`Autor:${libro.autor}`);
            console.log(`ISBN:${libro.ISBN}`);
            console.log(`Año publicacion:${libro.anioPublicacion}`);*/
      //console.log(`---------`);
    }
  }
  // definitivo,  busca el libro por isbn in la lista indicada
  buscarLibroPorISBN(listaLibro, isbn) {
    return listaLibro.find((libro) => libro.ISBN === isbn);
  }

  moverLibro(libro, origen, destino) {
    const indice = this.librosDisponibles.indexOf(libro); // devuelve -1 si no lo encuentra pero donde lo usamos no es necesario.
    origen.splice(indice, 1); // sacar 1 item en index
    if (destino === this.librosPrestados) {
      // verificamos q lista es para agregar correctamente
      this.agregarLibroPrestado(libro);
    } else if (destino === this.librosDisponibles) {
      this.agregarLibroDisponible(libro);
    }
  }

  prestarLibro2(isbn, usuario) {
    const libro = this.buscarLibroPorISBN(this.librosDisponibles, isbn); // buscamso en disponibles si el libro esta
    if (libro) {
      this.moverLibro(libro, this.librosDisponibles, this.librosPrestados);
      /*  const indice = this.librosDisponibles.indexOf(libro);
                this.librosDisponibles.splice(indice, 1);
                this.librosPrestados.push(libro);*/
      usuario.agregarlibro(libro);
      console.log(`Libro: ${libro.titulo} prestado a ${usuario.nombre}`);
    } else {
      console.log("El libro no está disponible");
    }
  }

  devolverLibro2(isbn, usuario) {
    const libro = this.buscarLibroPorISBN(this.librosPrestados, isbn);
    if (libro) {
      this.moverLibro(libro, this.librosPrestados, this.librosDisponibles);
      /* const indice = this.librosPrestados.indexOf(libro);
                this.librosPrestados.splice(indice, 1);
                this.librosDisponibles.push(libro);*/
      usuario.sacarlibro(libro);
      console.log(`Libro: ${libro.titulo} devuelto por ${usuario.nombre}`);
    } else {
      console.log("El libro no estaba prestado");
    }
  }

  /*
    prestarlibro(libro){
        const indice=this.librosDisponibles.indexOf(libro); // -1 si no existe
        if( indice!==-1){
            this.librosDisponibles.splice(indice,1) // sacar 1 elemento en indice
            this.agregarLibroPrestado(libro);
        }
        else{
            console.log("El libro no esta disponible")
        }
    }

    devolverlibro(libro){
        const indice=this.librosPrestados.indexOf(libro);
        if(indice!==-1){
            this.librosPrestados.splice(indice,1);
            this.agregarLibroDisponible(libro);
        }
        else{
            console.log("El libro no esta disponible")
        }
    }*/

  // primera version de prestar y devolver  pero usa el objeto comppleto
  //prestarlibro1 y devolverLibro1 no se usan, el programa usa la otra version
  /*prestarLibro1(libro, usuario) {
        const indice = this.librosDisponibles.indexOf(libro); // buscar indice de libro, devuelve -1 si no existe
        if (indice !== -1) {
            this.librosDisponibles.splice(indice, 1);// remover 1 elemento en indice
            this.agregarLibroPrestado(libro); // agregar
           // this.librosPrestados.push(libro); // agregar
            usuario.agregarlibro(libro); // agregar en la lista del usuario
            console.log(`Libro: ${libro.titulo} prestado a ${usuario.nombre}`); // corroboracion, no deberia estar aca igual.
        } else {
            console.log("El libro no está disponible");   // corroboracion, no deberia estar aca igual.
        }
    }

    devolverLibro1(libro, usuario) {
        const indice = this.librosPrestados.indexOf(libro); // buscar indice de libro, devuelve -1 si no existe
        if (indice !== -1) {
            this.librosPrestados.splice(indice, 1); // remover 1 elemento en indice
            this.agregarLibroDisponible(libro); //agregar
           // this.librosDisponibles.push(libro);
            usuario.sacarlibro(libro); // sacar en la lista del usuario
            console.log(`Libro: ${libro.titulo} devuelto por ${usuario.nombre}`);  //corroboracion
        } else {
            console.log("El libro no estaba prestado"); //corroboracion
        }
    }*/
}
export { Biblioteca };

/*
    pedirLibro(libro){
        const indice=biblioteca.librosDisponibles.indexOf(libro);
        if(indice!==-1){
            biblioteca.agregarLibroPrestado(libro);
            this.agregarlibro(libro);
            console.log(`libro: ${libro.titulo} prestado`);
        }
        else{
            console.log(`libro no disponible`);
        }
    }

    devolverlibro(libro){
        const indice=biblioteca.librosPrestados.indexOf(libro);
        if(indice!==-1){
            biblioteca.agregarLibroDisponible(libro)
            this.sacarlibro(libro)
            console.log(`Libro: ${libro.titulo} devuelto`);
        }
        else{
            console.log(`libro no disponible`);
        
        }
    }
*/
