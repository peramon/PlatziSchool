// Cuadrado
console.group('Cuadrados');

/*const ladoCuadrado = 5;

console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm')

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro es: ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es: ' + areaCuadrado + ' cm^2');
*/
function calcularPerimetroCuadrado(lado){
    return lado * 4;
}

function calcularAreaCuadrado(lado){
    return lado * lado;
}

console.log(calcularPerimetroCuadrado(12));
console.log(calcularAreaCuadrado(12));
console.groupEnd();



// Triangulo
console.group('Triangulos');
/*
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
console.log('El area del es: ' + areaTriangulo + ' cm^2')*/
function calcularPerimetroTriangulo(ladoUno,ladoDos, base){
    return ladoUno + ladoDos + base;
}

function calcularAreaTriangulo(base, altura){
    return (base * altura)/2;
}

console.log(calcularPerimetroTriangulo(2,2,4));
console.log(calcularAreaTriangulo(2,4));

console.groupEnd();
// Circulo

console.group('Circulos');
/*const diametroCirculo = 8;
const radioCirculo = diametroCirculo/2;

console.log('Medidas del circulo -> ' 
    + 'Radio: ' + radioCirculo + ' Diametro: ' + diametroCirculo); ;

const perimetroCirculo =  Math.PI * diametroCirculo;

console.log('El perimetro es: ' + perimetroCirculo + ' cm');

const areaCirculo = Math.PI * (radioCirculo * radioCirculo );
console.log('El area es: ' + areaCirculo + ' cm^2')*/

function calcularPerimetroCirculo(diametro){
    return Math.PI * diametro;
}

function calcularAreaCirculo(diametro){
    let radio = calcularRadio(diametro);
    return Math.PI * (radio * radio);
}

function calcularRadio(diametro){
    return diametro/2;
}

console.log(calcularPerimetroCirculo(8));
console.log(calcularAreaCirculo(8));

console.groupEnd();