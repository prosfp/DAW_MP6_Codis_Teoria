function f1() {
  console.log('f1')
}

function f2() {
  console.log('f2')
}

function f3() {
  console.log('f3')
}

function main() {
  console.log('main')

  setTimeout(f1, 50)
  setTimeout(f3, 30)

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after f1 and f3! Really?')
  ).then(resolve => console.log(resolve))

  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve))

  f2()
}

main()

// https://www.freecodecamp.org/espanol/news/sincrono-vs-asincrono-en-javascript/

// ¿Qué es la Job Queue en JavaScript?
// Cada vez que una promesa aparece en nuestro código, la función ejecutora entra en la cola de trabajo. El event loop funciona, como siempre, y le da prioridad a los elementos que están en job queue o cola de trabajo por encima de los elementos que se encuentran en la callback queue cuando el stack está libre.

// El elemento en la callback queue se llama macro task, mientras que el elemento en la job queue se llama micro task.

// Así que todo el proceso funciona así:

// Con cada bucle del event loop, se completa una tarea de la callback queue.
// Una vez que una tarea se haya completado, el event loop visita la job queue. Completa todas las micro tasks en la cola de trabajo antes de pasar a otra cosa.
// Si ambas colas tienen algo esperando, la job queue tiene prioridad sobre la callback queue.

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!
