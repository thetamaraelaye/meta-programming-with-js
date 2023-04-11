// function addTwoNums(a,b){
//     console.log(a+b)
// }
// //task 2
// addTwoNums(5,"5");
//task 3
// function addTwoNums(a,b) {
//     try {
//         console.log(a+b)
// } catch(err) {
//     console.log(err)
// }
// }
//task 4 and 5
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number'){
            throw new ReferenceError("the first argument is not a number")
        }
        else if(typeof(b) != 'number'){
            throw new ReferenceError("the second argument is not a number")
        } else {
            console.log(a+b)
        }
    } catch(err){
        console.log("Error!", err)
    }
}
//task 6 and 7 
addTwoNums('5',5);
console.log("It still works");

// Just above the for loop in the letterFinder function definition, declare a variable named condition1 and assign to it the following code: typeof(word) == 'string' && word.length >= 2.
// Declare a variable named condition2 on the next line and assign to it and assign to it a check that makes sure that the type of match is a string AND that the length of the match variable is equal to 1.
// Write an if statement on the next line that checks that condition1 is true, and condition2 is true
// Move the rest of the function's body into the if statement you wrote in the previous step.
// Code an "else" block after the "if" condition and console.log the following: "Please pass correct arguments to the function.".
// As a failing test, run the letterFinder function and pass it with any two numbers as arguments.
// As a passing test, run the letterFinder funciton and pass it with correct arguments, such as: letterFinder("cat", "c").
function letterFinder(word, match){
    var conditional = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var conditional2 = typeof(match) == 'string' && match.length == 1; //if match is a string and it is equal to 1
    if (conditional && conditional2 == true){ //if both conditions matches
        for(var i = 0; i < word.length; i++) {
        if(word[i] == match) { 
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
    } else {
        //if the requirements don't match
        console.log("Please passs correct arguments to the function.")
    }
}
//failing test
letterFinder(5,4);
//passing test
letterFinder('cat','c');

var result = null;

console.log(result);

var x;

try{
    throw new Error();
    console.log("Hello");
}  catch(err) {
    console.log("Goodbye");
}

var str = "Hello";
str.match("Hjllo");

try {
    Number(5).toPrecision(300) //toPrecision Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
    //condition string must be in range 1-21. 300 is out of range and as such returns an error
} catch (e){
    console.log("there was an error");
}