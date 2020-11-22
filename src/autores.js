/*
Para en un futuro poder relacionar las colecciones, en la colección libros debe haber un idAutor que sea el mismo idAutor 
que está en la tabla Autores.
PRIMERO habría que modificar la colección de los libros, y donde está el nombre del autor deberiamos cambiarlo por idAutor.
SEGUNDO habría que crear una nueva coleccion llamada autores donde aparecen los datos de los autores así como su id, 
que es el que se relacionará posteriormente a cada autor con su libro, mediante el idAutor
*/
db.libros.updateMany({ $rename: { "Autor": "idAutor" } } )
/*
    {Título: "Secuestrado",
    Editorial: "Alba Editorial",
    idAutor: ,
    Fecha: "19-09-2018",
    NºPáginas: 280,
    Dimensiones_mm: [210, 140],
    Géneros: ["Novela", "Ficción especulativa", "Novela histórica", "Aventuras"],
    Sinópsis: "A la muerte en 1751 de su padre, maestro rural, el joven David Balfour, aleccionado por el párroco del pueblo, que le entrega una carta del difunto para llevar en mano «al distinguido caballero Ebenezer Balfour de Shaws», emprende un viaje a casa de su tío con la perspectiva de mejorar su condición con una herencia inesperada. Pero su destino resulta ser una lóbrega mansión y el señor Ebenezer «un ser miserable, encorvado y estrecho de hombros, con una cara que parecía de arcilla». Con falsas promesas lo embarca en un bergantín, con la intención de venderle como esclavo. Narrada por su protagonista, con la elegante prosa de Robert Louis Stevenson, Secuestrado (1886) es una novela de padecimiento y recompensa."})
*/
db.libros.updateMany({ $rename: { "Autor": "idAutor" } } )

db.autores.insertOne({
    idAutor: 1,
    Nombre: "Robert",
    Apellidos: "Louis Stevenson",
    FechaNacimiento: "13-11-1850",
    FechaFallecimiento: "03-12-1894",
    Nacionalidad: "Británica"})

db.autores.insertOne({
    idAutor: 2,
    Nombre: "Arturo",
    Apellidos: "Pérez-Reverte Gutiérrez",        
    FechaNacimiento: "25-11-1951",
    FechaFallecimiento: null,
    Nacionalidad: "Española"})

db.autores.insertOne({
    idAutor: 3,
    Nombre: "Rosa",
    Apellidos: "Montero",        
    FechaNacimiento: "03-01-1951",
    FechaFallecimiento: null,
    Nacionalidad: "Española"})
    
db.autores.insertOne({
    idAutor: 4,
    Nombre: "Elena",
    Apellidos: "Ferrante",        
    FechaNacimiento: "05-04-1943",
    FechaFallecimiento: null,
    Nacionalidad: "Italiana"})