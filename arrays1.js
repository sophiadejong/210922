const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[arr1.length - 1])

const arr2 = [1, 'text', true]

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

const obj = {
    name: "nombre",
    edad: 30,
}

const index = ['name', 'edad']
const varOb = 'edad'

console.log(obj.name)
console.log(obj[varOb])
console.log(obj.edad)

for (let j = 0; j < index.length; j++) {
    console.log(obj[index[j]]);
}

// const obj2 = {};

const obj2 = {
    propUno: ""
};

// Anadiendo propiedades a los objectos 
obj2.name = 'nombre';
// obj2.name = false;

// ARRAYS DEL FLECHAS

// ITS THE SAMEEEE

// const resta = (n1, n2) => {
//     console.log(n1 - n2);
//     return n1 - n2
// }

const resta = (n1, n2) => n1 - n2;

console.log(resta(5,3));

function resta3(n1, n2){
    return n1 - n2;
}

var arr = {};

for (let i = 0;i <= 100;i++){
    console.log(i);
}

for (let i = 0; i <= 100; i++) {
    if (i%2) {
        ;
        } else {
        console.log(i);
        continue;
    }
}
