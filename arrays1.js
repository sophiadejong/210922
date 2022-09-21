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
