/*
Para enseñar todos los datos de la base de datos
*/
db.libros.find()
/*
Para contar todos los datos de la base de datos (devuelve una respuesta numérica)
*/
db.libros.find().count()
/*
Para enseñar todos los libros en los que la editorial sea Debolsillo
*/
db.libros.find( { Editorial: { $eq: "Debolsillo" } } )
/*
Para enseñar todos los libros que tengan más de 600 páginas
*/
db.libros.find( { NºPáginas: { $gt: 600 } } )
/*
Para enseñar todos los libros que tengan 400 páginas o más
*/
db.libros.find( { NºPáginas: { $gte: 400 } } )
/*
Para enseñar todos los libros que el género contenga Ciencia ficción
*/
db.libros.find( { Géneros: { $eq: "Ciencia ficción"} } )
/*
Para enseñar todos los libros que tengan menos de 300 páginas
*/
db.libros.find( { NºPáginas: { $lt: 300 } } )
/*
Para enseñar todos los libros que tengan 350 páginas o menos
*/
db.libros.find( { NºPáginas: { $lte: 350 } } )
/*
Para enseñar todos los libros que la editorial no sea Alfaguara
*/
db.libros.find( { Editorial: { $ne: "Alfaguara" } } )
/*
Para enseñar todos los libros que las dimensiones no sean [190, 125]
*/
db.libros.find( { Dimensiones_mm: { $nin: [ 190, 125 ] } } )
/*
Para enseñar todos los libros que las editoriales no sean ni Debolsillo ni Booket
*/
db.libros.find( { $and: [ { Editorial: { $ne: "Debolsillo" } }, { Editorial: { $ne: "Booket" } } ] } )
/*
Para enseñar todos los libros que el autor no sea Javier Castillo
*/
db.libros.find( { Autor: { $not: { $eq: "Javier Castillo" } } } )
/*
Para enseñar todos los libros que el autor no sea Rosa Montero ni tenga menos de 400 páginas
*/
db.libros.find( { $nor: [ {Autor: "Rosa Montero" }, { NºPáginas: { $lt: 400 } } ] } )
/*
Para enseñar todos los libros que la editorial sea Suma y todos los libros que el autor sea Arturo Pérez Reverte
*/
db.libros.find( { $or: [ { Editorial: { $eq: "Suma" } }, { Autor: "Arturo Pérez Reverte" } ] } )
/*
Para enseñar todos los libros que tengan de fecha de lanzamiento 2019
*/
db.libros.find( { Fecha: { $regex: /2019$/ } } )
/*
Para enseñar todos los libros que el autor empieze por Jav
*/
db.libros.find( { Autor: { $regex: /^JAV/i } } )
/*
Para enseñar todos los libros que el título empieze por S
*/
db.libros.find( {Título: { $regex: /S/ } } )
/* 
Para los arrays en los que Ciencia ficción y Suspense estén dentro, pero no necesariamente en el orden especificado 
*/
db.libros.find( { Géneros: { $all: ["Aventuras", "Novela bélica"] } } )
/* 
Para los arrays en los que Ciencia ficción y Suspense estén en el orden especificado
 */
db.libros.find( { Géneros: ["Ciencia ficción", "Suspense"] } )
/*
Para enseñar el libro en el que la primera letra de la autora sea M, la editorial sea suma y uno de los géneros del libro contiene nov
*/
db.libros.find( { $and: [ { Autor: { $regex: /^M/i } }, { Editorial: {$eq: "Suma" } }, {Géneros: { $regex: /^NOV/i }}  ] } )
/*
consulta para documentos donde el array dimensiones contiene al menos un elemento que es mayor que 100 y menor que 200:
*/
db.libros.find( { Dimensiones_mm: { $elemMatch: { $gt: 100, $lt: 200 } } } )
/*
consulta para documentos donde el primer valor del array es mayor que 230
*/
db.libros.find( { "Dimensiones_mm.0": { $gt: 230 } } )
/*
consulta para documentos donde el segundo valor del array es mayor que 150
*/
db.libros.find( { "Dimensiones_mm.1": { $gt: 150 } } )
/*
/*
consulta para documentos donde el segundo valor del array es menor que 130
*/
db.libros.find( { "Dimensiones_mm.1": { $lt: 130 } } )
/*
consulta para documentos donde el segundo documento del array es Evolucionismo
*/
db.libros.find( { "Géneros.1": { $eq: "Evolucionismo"} } )
/*
consulta para documentos donde el segundo valor del array Géneros es algo que empieza por "sus", 
y donde el segundo valor del array dimensiones_mm es menor que 160
*/
db.libros.find( { $and: [ { "Géneros.1": { $regex: /^sus/i} }, { "Dimensiones_mm.1": { $lt: 160 } } ] } )
/*
Consulta que responde donde aparece el texto comprendido entre las comillas
*/
db.libros.find( { $text: { $search: "tu corazón se desboca por quien menos esperas sin que puedas frenarlo" } } )
/*
Consulta para hacer coincidir la frase exacta como un solo término
*/
db.libros.find( { $text: { $search: "\"inolvidable\"" } } )
/*
Consulta  aquellos documentos en la colección libros donde se obtiene de resto 0 diviendo cualquier número dentro del array en este caso entre 4 }
*/
db.libros.find( { Dimensiones_mm: { $mod: [4, 0] } } )
