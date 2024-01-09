// Anem a veure el concepte de Callback, que ens permet evitar haver d'esperar a que una funció acabi per executar la següent.

console.log('Enviant petició al servidor!')

// Recordeu-me com funciona la funció setTimeout?
setTimeout(() => {
  console.log('Aquí tens la informació del servidor...')
}, 3000)
console.log('Estic al final del codi!')

// Com pot ser que JS, que és un llenguatge single-thread, pugui fer això?

// De fet és el navegador qui s'encarrega de fer això, però és interessant saber com funciona.
/* 
Podemos clasificar la mayoría de las operaciones asíncronas de JavaScript de 2 maneras:
Eventos o funciones Browser API/Web API. Estos incluyen métodos como setTimeout, o controladores de eventos como clic, mouse over, scroll y muchos más.
Promesas. Un objeto único en JavaScript que nos permite realizar operaciones asíncronas. */

// Bootcamp: https://www.udemy.com/course/the-web-developer-bootcamp/
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!
