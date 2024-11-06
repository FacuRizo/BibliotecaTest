
class Libro{
    constructor(titulo,autor,ISBN,anioPublicacion){
        this.titulo=titulo;
        this.autor=autor;
        this.ISBN=ISBN;
        this.anioPublicacion=anioPublicacion;
    }

    toString(){
       return(`Titulo: ${this.titulo} Autor: ${this.autor} ISBN: ${this.ISBN} Año publicacion: ${this.anioPublicacion}`)
    }
}
export {Libro};