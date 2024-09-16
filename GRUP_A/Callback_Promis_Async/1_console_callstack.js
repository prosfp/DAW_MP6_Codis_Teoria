const mult = (x, y) => x * y

const quadrat = x => mult(x, x)

const isTriangleRectangle = (a, b, c) => quadrat(a) + quadrat(b) === quadrat(c)
isTriangleRectangle(3, 4, 5)

console.log('He acabat!')

// Pots veure a les eines per desenvolupadors, sota la pestanya "Sources" amb el debugger sobre la funció principal, com es va omplint la pila

//http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!
