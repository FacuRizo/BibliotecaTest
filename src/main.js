import  {Biblioteca}  from './bibliotecas/biblioteca.js';
import  {Libro}  from './libros/libro.js';
import  {LibroDigital}  from './libros/libroDigital.js';
import  {LibroFisico}  from './libros/libroFisico.js';
import  {Usuario}  from './usuarios/usuario.js';


const librosEjemplo = [
    new LibroFisico("El Quijote", "Miguel de Cervantes", "1234567890", 1605, 900, true),
    new LibroDigital("Cien años de soledad", "Gabriel García Márquez", "1234567891", 1967, "5MB", "https://descarga/cienAños"),
    new LibroFisico("Don Juan Tenorio", "Tirso de Molina", "1234567892", 1620, 220, true),
    new LibroFisico("La casa de los espíritus", "Isabel Allende", "1234567893", 1982, 500, false),
    new LibroDigital("1984", "George Orwell", "1234567894", 1949, "3MB", "https://descarga/1984"),
    new LibroFisico("Orgullo y prejuicio", "Jane Austen", "1234567895", 1813, 432, false),
    new LibroFisico("Crónica de una muerte anunciada", "Gabriel García Márquez", "1234567896", 1981, 200, true),
    new LibroDigital("El amor en los tiempos del cólera", "Gabriel García Márquez", "1234567897", 1985, "7MB", "https://descarga/amorColera"),
    new LibroFisico("El principito", "Antoine de Saint-Exupéry", "1234567898", 1943, 96, true),
    new LibroFisico("Moby Dick", "Herman Melville", "1234567899", 1851, 635, false),
    new LibroDigital("El gran Gatsby", "F. Scott Fitzgerald", "1234567800", 1925, "4MB", "https://descarga/granGatsby"),
    new LibroFisico("Rayuela", "Julio Cortázar", "1234567801", 1963, 750, true),
    new LibroFisico("La metamorfosis", "Franz Kafka", "1234567802", 1915, 200, false),
    new LibroDigital("El túnel", "Ernesto Sabato", "1234567803", 1948, "2MB", "https://descarga/tunel"),
    new LibroFisico("Las uvas de la ira", "John Steinbeck", "1234567804", 1939, 500, true),
    new LibroFisico("El viejo y el mar", "Ernest Hemingway", "1234567805", 1952, 127, true),
    new LibroDigital("Las aventuras de Tom Sawyer", "Mark Twain", "1234567806", 1876, "1.5MB", "https://descarga/tomSawyer"),
    new LibroFisico("La sombra del viento", "Carlos Ruiz Zafón", "1234567807", 2001, 600, false),
    new LibroDigital("Donde cantan los cangrejos", "Willy Ronnis", "1234567808", 1950, "6MB", "https://descarga/cangrejos"),
    new LibroDigital("La tregua", "Mario Benedetti", "1234567809", 1960, "1MB", "https://descarga/tregua")
];

const miBiblioteca = new Biblioteca();

librosEjemplo.forEach(libro => {
    miBiblioteca.agregarNuevoLibroAInventario(libro);
});

const usuarios = [
    new Usuario("Alice", 1, []),
    new Usuario("Bob", 2, []),
    new Usuario("Carlos", 3, []),
    new Usuario("Diana", 4, []),
    new Usuario("Elena", 5, []),
];

const isbnSeleccionados = [
    "1234567890", // ISBN del primer libro
    "1234567891", // ISBN del segundo libro
    "1234567892", // ISBN del tercer libro
    "1234567893", // ISBN del cuarto libro
    "1234567894"  // ISBN del quinto libro
];

for (let i = 0; i < isbnSeleccionados.length; i++) {
    // prestamos  los libros 
    miBiblioteca.prestarLibro2(isbnSeleccionados[i], usuarios[i]);
}

console.log(`------`);
console.log(`Tamaño de inventario:${miBiblioteca.inventarioLibros.length}`);
console.log("Inventario de todos los libros en inventario: ")
miBiblioteca.listarLibrosEnInventario()
console.log(`------`);
console.log(`Tamaño de prestados:${miBiblioteca.librosPrestados.length}`);
console.log("Inventario de todos los libros prestados: ");
miBiblioteca.listarLibrosPrestados()
console.log(`------`);
console.log(`Tamaño de libros disponibles:${miBiblioteca.librosDisponibles.length}`);
console.log("Inventario de todos los libros prestados: ");
miBiblioteca.listarLibrosdisponibles();
console.log(`------`);

for( let aUsuario of usuarios){
    console.log(`Nombre: ${aUsuario.nombre}`);
    console.log(`idUsuario: ${aUsuario.idUsuario}`);
    console.log(`------`);
    aUsuario.listarLibros();
    
}
console.log("");
