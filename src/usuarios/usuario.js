class Usuario{
    constructor(nombre,idUsuario,librosAdquiridos=[]){
        this.nombre=nombre;
        this.idUsuario=idUsuario;
        this.librosAdquiridos=librosAdquiridos;
    }
    toString(){
        console.log(`Nombre: ${this.nombre} id: ${this.idUsuario}`);
        this.listarLibros();
    }
    
    agregarlibro(libro){
        this.librosAdquiridos.push(libro)
    }

    sacarlibro(libro) {
        const indice = this.librosAdquiridos.indexOf(libro);
        if (indice !== -1) {
            this.librosAdquiridos.splice(indice, 1);
        }
 
    }
    pedirLibro1(biblioteca, libro) {
        biblioteca.prestarLibro1(libro, this);
    }

    devolverLibro1(biblioteca, libro) {
        biblioteca.devolverLibro1(libro, this);
    }

    pedirLibro2(biblioteca, isbn) {
        biblioteca.prestarLibro2(isbn, this);
    }

    devolverLibro2(biblioteca, isbn) {
        biblioteca.devolverLibro2(isbn, this);
    }

    listarLibros(){
        for(let unLibro of this.librosAdquiridos){

            console.log(unLibro.toString());
            console.log('---------')
            //datos basicos
            /*console.log(`Libro: ${libros.titulo}`);
            console.log(`Autor: ${libros.autor}`);
            console.log(`ISBN: ${libros.ISBN}`);
            console.log(`Año Publicacion: ${libros.anioPublicacion}`);
            // if encuentra numero de paginas seria un libro fisico por lo tanto muestra sus datos
            if(libros.numeroDePaginas){
                console.log(`Numero de paginas: ${libros.numeroDePaginas}`);
                console.log(`enBiblioteca: ${libros.enBiblioteca}`);
            }
            // si encuentra  tamaño dearchivo seria un libro digital por lo tanto muestra sus datos
            else if(libros.tamanioArchivo){
                console.log(`Tamaño de archivo: ${libros.tamanioArchivo}`);
                console.log(`Link de descarga: ${libros.linkDescarga}`);
            }
            ;*/
        }
    }

}
export { Usuario };