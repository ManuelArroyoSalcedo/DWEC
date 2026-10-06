//Acceder a un elemento
const arr1 = ["a","b","c","d"];
console.log(arr1[1]);

//Recorrer un array con for
//Solo con for
for(let i = 0; i < arr1.length ;i++) console.log(arr1[i]);

//for .. of
console.log("for .. of");
let valor;
for(valor of arr1) console.log(valor);

//for .. in
console.log("for .. in");
let ind;
for(ind in arr1) console.log(ind + "->" + arr1[ind]);

//Recorrer un array con while
let notas = [10,6.2,7.3,4,5,6,7,8,9];

//notas = new Array();
console.log("con while");
let paso = 0;
while(paso < notas.length) {
    console.log(notas[paso]);
    paso++;
}

//Recorrer el arry notas, que está vacío, 
//con do..while
console.log("con do..while");
if(notas.length>0){
    paso = 0;
    do{
        console.log(notas[paso]);
        paso++;
    }while(paso < notas.length);
}