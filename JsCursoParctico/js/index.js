// Cuadrado
console.group('Cuadrados');

const ladoCuadrado = 5;

console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm')

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro es: ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es: ' + areaCuadrado + ' cm^2');

console.groupEnd();

// Triangulo
console.group('Triangulos');
const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const baseTriangulo = 6;
const alturaTriangulo = 5.5;

console.log('Los lados del triangulo miden: ' 
+ ladoTrianguloUno + ' cm,'
+ ladoTrianguloDos + ' cm,'
+ baseTriangulo + ' cm');

const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTriangulo;
console.log('El perimetro es: ' + perimetroTriangulo + ' cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log('El area del es: ' + areaTriangulo + ' cm^2')
console.groupEnd();
// Circulo

console.group('Circulos');
const diametroCirculo = 8;
const radioCirculo = diametroCirculo/2;

console.log('Medidas del circulo -> ' 
    + 'Radio: ' + radioCirculo + ' Diametro: ' + diametroCirculo); ;

const perimetroCirculo =  Math.PI * diametroCirculo;

console.log('El perimetro es: ' + perimetroCirculo + ' cm');

const areaCirculo = Math.PI * (radioCirculo * radioCirculo );
console.log('El area es: ' + areaCirculo + ' cm^2')
console.groupEnd();