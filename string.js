    // 1. uppercase

    let city = "latur";
console.log(city.toUpperCase());

//2.lowercase

let string = prompt("Enter a string:");
console.log(string.toLowerCase());

//3.length

console.log(string.length);

//5.

console.log(city.endsWith("ur"));
//6.

let input = prompt("give input");
console.log(input.startsWith("The"));

//7.

let str7 = prompt("Enter a string with spaces before/after:");
console.log("Trimmed string:", str7.trim());

//8.

console.log(input.replace(" ","-" ))

//9.

let name = prompt("Enter your name:");

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

//10.
let inputs = prompt("enter a sentence")

console.log(inputs.split(" "))
