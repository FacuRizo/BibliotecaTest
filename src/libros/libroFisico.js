import { Libro } from './libro.js'
class LibroFisico extends Libro{
    constructor(titulo,autor,ISBN,anioPublicacion,numeroDePaginas,enBiblioteca){
        super(titulo,autor,ISBN,anioPublicacion)
        this.numeroDePaginas=numeroDePaginas;
        this.enBiblioteca=enBiblioteca;

    }
    enBibliotecaToString() {
        return this.enBiblioteca ? "Sí" : "No";
      }
    

    toString(){
        return(`${super.toString()} Numero de pagina: ${this.numeroDePaginas} Esta en biblioteca:`, this.enBibliotecaToString())  
  }
}

export  {LibroFisico};