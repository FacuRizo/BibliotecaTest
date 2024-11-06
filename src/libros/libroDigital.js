import { Libro } from './libro.js'

class LibroDigital extends Libro{
    constructor(titulo,autor,ISBN,anioPublicacion,tamanioArchivo,linkDescarga){
        super(titulo,autor,ISBN,anioPublicacion)
        this.tamanioArchivo=tamanioArchivo;
        this.linkDescarga=linkDescarga;

    }

    toString(){
          return(`${super.toString()} Tamaño de archivo: ${this.tamanioArchivo} Link de descarga: ${this.linkDescarga}`)  
    }


}
export  {LibroDigital};