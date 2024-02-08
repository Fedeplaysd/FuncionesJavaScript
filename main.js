
//Escribe un programa de JavaScript para checkear dos numeros y que devuelva true si uno de los numeros es 100 o si la suma de los dos es 100

numeros = [10, 100, 30, 50, 50, ] // false, true, false, true ;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] == 100 || (numeros[i] + numeros[i + 1]) == 100) {
    console.log("true")
  }else {
    console.log("false")
  }
}

//Este metodo es extenso y necesita de tener un array

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100, 0)); //True
console.log(isEqualTo100(50, 50)); //True
console.log(isEqualTo100(70, 30)); //True
console.log(isEqualTo100(10, 10)); //False

//Esta seria una solucion mucho mas practica en donde no se usa un array y menos lineas de codigo



//Escribe un programa de JavaScript para obtener la extension de un nombre de archivo

const getExtension = (filename) => {
  return filename.split('.').pop();
}

console.log(getExtension('ejemplo.txt')); // Output: txt
console.log(getExtension('script.js')); // Output: js

//Este rmetodo es mas extenso y no te devuelve el operador '.' del nombre de archivo

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('escrito.txt')); // Output: .txt
console.log(getFileExtension('rendimiento.py')); // Output: .py
console.log(getFileExtension('clientes.zip')); // Output: .zip

//Este funcion es mejor y mas practica ya que se ejecuta en una sola linea y devuelve el '.' del nombre de archivo