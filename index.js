console.log("Let's code in JavaScript");

var result = 0;

var i = 4;
while(i > 0) {
    result += 2;
    i--;
}

console.log(result);

try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}
