// Very Easy
var a = 50;
var b = 10;
var c = a-b;

console.log(`the difference between ${a} and ${b} is ${c}`);

//Easy

var john = 4;
var sam = 3;
var f = john - sam;

console.log (`The name john is longer than sam by ${f} character`);

//Medium

let userText = prompt("Shout or Whisper");
let nothing = Number(3);
if (userText === userText.toUpperCase()){
    console.log("you shouted");
}
    else if(userText === userText.toLowerCase()) {
        console.log("you whispered");
    }
   
    //Hard and Very hard 

   

    function add (num1, num2){
        console.log( num1 + num2 );

    }
    function subtract (num1, num2){
        console.log( num1 - num2 );

    }
    function multiply (num1, num2){
        console.log( num1 * num2 );
    }
    function divide (num1, num2){
        console.log( num1 / num2 );
    }


    const operator = prompt('Enter either +, -, * or / : ');
   
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));


let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}


console.log(`${num1} ${operator} ${num2} = ${result}`);