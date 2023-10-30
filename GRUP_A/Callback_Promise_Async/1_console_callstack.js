const mult = (x, y) => x * y;

const quadrat = (x) => mult(x, x);

const isTriangleRectangle = (a, b, c) => quadrat(a) + quadrat(b) === quadrat(c);

isTriangleRectangle(3, 4, 5);
