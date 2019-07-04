const modulo = require('./miPrimerModulo');
const circulo = require('./geometria/circulo');
const geometria = require('./geometria');

console.log(modulo.restaNumeros(1, 4));
console.log(modulo.sumaNumeros(1, 4));

console.log(circulo.areaCirculo(1), 
circulo.perimetroCirculo(1));

console.log(geometria.area.areaCirculo(1), 
geometria.perimetro.perimetroCirculo(1));
