import { Libro } from './libro.js'
class LibroFisico extends Libro{
    constructor(titulo,autor,ISBN,anioPublicacion,numeroDePaginas,enBiblioteca){
        super(titulo,autor,ISBN,anioPublicacion)
        this.numeroDePaginas=numeroDePaginas;
        this.enBiblioteca=enBiblioteca;

    }
}

export  {LibroFisico};