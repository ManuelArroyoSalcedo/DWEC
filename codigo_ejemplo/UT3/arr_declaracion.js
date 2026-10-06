//DECLARACIÓN DE ARRAYS

//PRIMERA FORMA - CON CORCHETES
const miprimerarry = [1,2,3,4,5];
console.table(miprimerarry);
console.log("------------------");

//SEGUNDA FORMA - CONSTRUCTOR ARRAY()
const arr1 = new Array();
console.log(arr1);
console.log("------------------");

const frutas = new Array("manzana", "naranja", "plátano"); 
console.table(frutas); 
console.log("------------------");

const miArray = new Array(5); 
console.log(miArray);  

//Array de dos dimensiones
const multiarray = [
    [1,2,3,4],
    [5,6,7,8,9]
];
console.table(multiarray);
console.log(multiarray);

//Propiedad length
console.log(multiarray.length);
console.log(multiarray[0].length);
console.log(multiarray[1].length);

//Acceso a los elementos del array
const arr2 = [2,3,,4,5];
console.log(arr2[2]);
console.log(arr2)