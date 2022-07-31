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

//specify the variable type wise
let stringVariable: string;
stringVariable = "34";

let numberVariable: number;
numberVariable = 34;

//Array
let arrayVariable: string[] = []; //array type
arrayVariable.push("done");

let bothArray: (string|number)[] = []; //union type
// bothArray.push(34,"asdfsdf",false);
bothArray.push(34,"asdfsdf");

//Object //explicit type
let info: {
    name: string,
    phone: number,
    adult: boolean
}

info = {
    name: 'AAA',
    phone: 34234324,
    // adult: "asdfasdf",
    adult: true,
}

//Dynamic type or any type
let any: any;
any = 4590;

let anyArray:any[] = [];
anyArray.push(3432);
anyArray.push("asdfasdf");
console.log(anyArray);