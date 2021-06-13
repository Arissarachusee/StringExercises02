let num = 1001;


//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

console.log(String(num).length);



//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let numberchange =  num.toFixed(2);

console.log(num.toFixed(2)); 

//let numberNoDot =   numberchange.replace['.'];
//console.log(numberNoDot);

console.log (numberchange, "has",(num.toFixed(2).length), "digits but a length of 7" );

//console.log (numberNoDot, "has",(String(num).length), "digits but a length of 7" );
//Modify your code to print out the length of a decimal value EXCLUDING the period.

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(num).includes('.')) {
  console.log(String(num)-1);

} else {

if (String(num).length) {
  console.log(num.toFixed(2).length);
}
}


/*part 1 
//'JavaScript'[8]  = 'p'
 let indexNum  = "JavaScript"
    console.log(indexNum[8]);
//"Strings are sequences of characters."[5] = "g"
 let someString  = "Strings are sequences of characters"
    console.log(someString[5]);
//"Wonderful".length 

let word = "Wonderful"  
    console.log(word.length);

//"Do spaces count?".length yes
let countSpace = "Do spaces count?"
   console.log(countSpace.length);*/



