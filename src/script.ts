let playerName="Mashrafi"
console.log(playerName);
const a = 24;
console.log(a);

//Function
function multiply(a:number, b:number){
    return a * b;
}

console.log(multiply(6,34));

//Array
let fruits = ['apple', 'banana', 'orange'];
// fruits.push(3432); //'number' is not assignable to parameter of type 'string'
fruits.push('Mango');
console.log(fruits);

let mixed = ['aaa', true, 3, {}]

mixed.push({
   name: 'Bangladesh' //declare object{} in parameter before push object
});

console.log(mixed);

//object
let user = {
    name: 'A',
    age: 34,
    id: 1
}

console.log(user);