console.log('Enviant petició al servidor')

setTimeout(() => {
  console.log('Aquí tens la informació del servidor')
}, 3000)

console.log('Estic al final del codi!')

// Com és que passa això si JS és Single Thread
// De fet és el nave qui s'encarrega de fer això.

// Podemos clasificar la mayoría de las operaciones asíncronas de JavaScript de 2 maneras:
// Eventos o funciones Browser API/Web API. Estos incluyen métodos como setTimeout, o controladores de eventos como clic, mouse over, scroll y muchos más.
// Promesas. Un objeto único en JavaScript que nos permite realizar operaciones asíncronas. */

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!
