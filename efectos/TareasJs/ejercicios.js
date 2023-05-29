let a=prompt('Ingrrese su nombre')
let b= parseInt(prompt('Ingrese su edad'))

mensaje=`hola ${a}. tu edad es ${b}`;
console.log("Hola " + a +  ". Tienes " + b + " años.");
console.log(`Hola ${a} . el año que viene tendras ${b + 1} años.`);




let c
let d
let f
do{
    f=parseInt(prompt('Que figura desea saber su area, ingrese 1 para triangulo, 2 para rectangulo, 3 para circulo, 4 para salir del sistema'));
    switch(f){
        case 1:
            let base=parseInt(prompt('ingrese la base del triangulo'));
            let altura=parseInt(prompt('ingrese la altura del triangulo'));
            console.log("el area del triangulo ingresado es de "+(base*altura)/2);
             
            break;
        case 2: 
            let baseR=parseInt(prompt('ingrese la base del Rectangulo'));
            let alturaR=parseInt(prompt('ingrese la altura del Rectangulo')); 
            console.log("el area del rectangulo ingresado es de "+(baseR*alturaR));
            break;
            
        case 3:
            let radio=parseInt(prompt('Ingrese el radio del circulo'));
            console.log("el area del circulo es de: "+Math.PI*Math.pow(radio,2));
            break;
         case 4:
            console.log("saliendo del sistema");
            break;
        default:
            console.log('Digito un numero diferente por favor vuelva a intentarlo')
            
        } 
}while(f!=4)


let numero =parseInt(prompt('Ingrese un numero '))
for(let i =1;i<=numero; i++){
    if (i%2==0){
        console.log(i + " es par");
    }else{
        console.log(i +" es impar");
    }

}


let primo = parseInt(prompt('Ingrese un número para verificar si es primo'));

// Verificar si el número es menor o igual a 1
if (primo <= 1) {
  console.log(primo + ' no es un número primo.');
} else {
  let esPrimo = true;

  // Verificar si el número es divisible por algún número menor a su mitad
  for (let i = 2; i <= Math.sqrt(primo); i++) {
    if (primo % i === 0) {
      esPrimo = false;
      break;
    }
  }

  // Mostrar el resultado
  if (esPrimo) {
    console.log(primo + ' es un número primo.');
  } else {
    console.log(primo + ' no es un número primo.');
  }
}



let g =parseInt(prompt('ingrese el numero que le desea saber el factorial'))
let t=1
for (let i=1;i<=g;i++){
   t=i*t
}console.log(`factorial del numero `+g+` es:`+t)






let suma=0
let cont=0

while(suma  < 50){
  let y=parseInt(prompt('ingrese un numero aleatorio'))
  suma=suma+y
  cont++
}console.log(`acumulado `+ suma + ` numero de iteraciones:`+cont)

var numeros = [2, 5, 8, 11, 4];

var pares = [];
var impares = [];

for (let i=0;i<numeros.length;i++){
  var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

  // Multiplicar el número del primer array por el número aleatorio
  var resultado = numeros[i] * numeroAleatorio;

  var resultado = numeros[i] * numeroAleatorio;

  // Mostrar la multiplicación y su resultado en la consola
  console.log(numeros[i] + " x " + numeroAleatorio + " = " + resultado);

  // Verificar si el resultado es par o impar
  if (resultado % 2 === 0) {
    // Guardar el número en el array de pares
    pares.push(resultado);
  } else {
    // Guardar el número en el array de impares
    impares.push(resultado);
  }
}

// Mostrar los arrays de pares e impares en la consola
console.log("Array de pares: " + pares);
console.log("Array de impares: " + impares);


// Array de letras para el cálculo
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// Solicitar un número de DNI al usuario
var dni = parseInt(prompt("Introduce un número de DNI:"));

// Validar el número de DNI
if (dni >= 0 && dni <= 99999999) {
  // Calcular la posición de la letra
  var posicion = dni % 23;

  // Obtener la letra correspondiente
  var letra = letras[posicion];

  // Mostrar la letra por consola
  console.log("La letra correspondiente al número de DNI " + dni + " es: " + letra);
} else {
  console.log("El número de DNI introducido no es válido.");
}

// Solicitar una palabra al usuario
var palabra = prompt("Introduce una palabra:");

// Convertir la palabra a minúsculas para facilitar el conteo
palabra = palabra.toLowerCase();

// Inicializar contadores
var consonantes = 0;
var vocales = 0;

// Recorrer cada carácter de la palabra
for (var i = 0; i < palabra.length; i++) {
  var letra = palabra[i];

  // Verificar si el carácter es una vocal
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vocales++;
  } else if (letra >= 'a' && letra <= 'z') {
    // Verificar si el carácter es una consonante
    consonantes++;
  }
}

// Mostrar los resultados por consola
console.log("Palabra: " + palabra);
console.log("Número de consonantes: " + consonantes);
console.log("Número de vocales: " + vocales);
console.log("Longitud de la palabra: " + palabra.length);
// Array de colores
var colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

// Solicitar un color al usuario
var colorUsuario = prompt("Introduce un color:");

// Convertir el color introducido a minúsculas para comparar
colorUsuario = colorUsuario.toLowerCase();

// Verificar si el color introducido está en el array
var encontrado = colores.includes(colorUsuario);

// Mostrar el resultado por consola
if (encontrado) {
  console.log("El color " + colorUsuario + " se encuentra en el array.");
} else {
  console.log("El color " + colorUsuario + " no se encuentra en el array.");
}
