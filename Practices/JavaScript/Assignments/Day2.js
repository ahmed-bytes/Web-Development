// Strings and Template Literals
const country = "Nigeria";
const continent = "Africa";
let population = 13000000;
let language = "English";

let description = `${country} is in ${continent} and its ${population} million people speak ${language}`
console.log(description + "\n");

//Taking Decisions: if / else Statements
if (population > 33000000) {
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} population is 22 million below average\n`);
}

// Type Conversion and Coercion
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// Equality Operators: == vs. ===
