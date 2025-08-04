// 1. Add two numbers
let sum = 8 + 12;
console.log("1. Sum =", sum); // 20

// 2. Find remainder when 17 is divided by 3
let remainder = 17 % 3;
console.log("2. Remainder =", remainder); // 2

// 3. Multiply 2, 3, and 4
let product = 2 * 3 * 4;
console.log("3. Product =", product); // 24

// 4. Subtract 100 from 250 and divide result by 5
let result4 = (250 - 100) / 5;
console.log("4. Result =", result4); // 30

// 5. Output of ++a
let a = 5;
let b = ++a; /
console.log("5. a =", a, ", b =", b);

// 6. Use += to add 10 to a variable
let num6 = 20;
num6 += 10;
console.log("6. Updated value =", num6); // 30

// 7. Use *= to double a variable
let num7 = 7;
num7 *= 2;
console.log("7. Doubled value =", num7); // 14

// 8. Output of x -= 3
let x = 10;
x -= 3;
console.log("8. x =", x); // 7

// 9. Check equality with == and ===
let n1 = 10, n2 = '10';
console.log("9. n1 == n2:", n1 == n2);   
console.log("9. n1 === n2:", n1 === n2); 

// 10. Check if 25 > 15
console.log("10. 25 > 15:", 25 > 15); // true

// 11. Compare two numbers (first < second)
let a11 = 8, b11 = 12;
console.log("11. a11 < b11:", a11 < b11); // true

// 12. Output of 5 === "5"
console.log("12. 5 === '5':", 5 === "5"); // false

// 13. Check if a number is between 10 and 50
let n13 = 30;
console.log("13. 10 < n13 < 50:", n13 > 10 && n13 < 50); // true

// 14. Check if a number is < 10 or > 100
let n14 = 150;
console.log("14. n14 < 10 || n14 > 100:", n14 < 10 || n14 > 100); // true

// 15. What is the output?
let a = true;
let b = false;
console.log("15. a && b =", a && b); // false

// 16. Negate a boolean value using !
let bool = true;
console.log("16. !true =", !bool); // false

// 17. Check even or odd using ternary
let num = 9;
let evenOdd = (num % 2 === 0) ? "Even" : "Odd";
console.log("17.", num, "is", evenOdd); // Odd

// 18. Check eligibility to vote using ternary
let age = 20;
let canVote = (age >= 18) ? "Eligible to Vote" : "Not Eligible";
console.log("18. Voting Eligibility:", canVote); // Eligible

// 19. Greater of two numbers using ternary
let n1 = 15, n2 = 25;
let greater = (n1 > n2) ? n1 : n2;
console.log("19. Greater number is:", greater); // 25

// 20. Predict the output
let x = 5;
let y = x++ + ++x; // y = 5 + 7 = 12, x becomes 7
console.log("20. y =", y); // 12





// 1. Swap Two Numbers Without Using a Third Variable
let x1 = 10, y1 = 5;
x1 = x1 + y1;
y1 = x1 - y1;
x1 = x1 - y1;
console.log("1. Swapped values:", "x1 =", x1, "y1 =", y1);

// 2. Check If a Number is Even or Odd (without if/?:)
let num = 7;
let isEven = !(num % 2);  // true if even
console.log("2. Number is", isEven && "Even" || "Odd");

// 3. Find Maximum of Three Numbers using only operators
let a = 12, b = 25, c = 7;
let max = (a > b && a > c) * a + (b > a && b > c) * b + (c > a && c > b) * c;
console.log("3. Maximum of", a, b, c, "is", max);

// 4. Simple Calculator Function
function calculate(n1, n2, op) {
  return (op === '+') * (n1 + n2) +
         (op === '-') * (n1 - n2) +
         (op === '*') * (n1 * n2) +
         (op === '/') * (n1 / n2) +
         (op === '%') * (n1 % n2);
}
console.log("4. Calculator Result:", calculate(10, 3, '*'));

// 5. Check if a Character is a Vowel
let ch = 'e';
let isVowel = (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u');
console.log("5.", ch, "is", isVowel && "Vowel" || "Consonant");

// 6. Square of a Number Using *=
let num2 = 6;
num2 *= num2;
console.log("6. Square is", num2);

// 7. Return true Only if Both Are Non-Zero Numbers
let n1 = 5, n2 = 8;
let bothNonZero = n1 && n2;
console.log("7. Both non-zero?", !!bothNonZero); // Convert to true/false

// 8. Check if a Number Lies Between Two Values
let num3 = 15, lower = 10, upper = 20;
let isBetween = (num3 > lower) && (num3 < upper);
console.log("8. Number between?", isBetween);

// 9. Postfix and Prefix
let a9 = 5;
let b9 = a9++ + ++a9;
console.log("9. a =", a9, ", b =", b9);

// 10. Logical Operators Output
let x = 0, y = 10;
let result1 = x && y;
console.log("10. x && y =", result1); // Outputs 0 because x is falsy





// 1. Even or Odd Checker
let num1 = prompt("1. Enter a number to check Even or Odd:");
if (num1 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 2. Positive, Negative or Zero
let num2 = prompt("2. Enter a number to check Positive, Negative, or Zero:");
if (num2 > 0) {
  console.log("Positive");
} else if (num2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 3. Vowel or Consonant
let ch = prompt("Enter a single letter:").toLowerCase();

if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// 4. Greater of Two Numbers
let a = prompt("4. Enter first number:");
let b = prompt("Enter second number:");
if (a > b) {
  console.log("Greater number is:", a);
} else if (b > a) {
  console.log("Greater number is:", b);
} else {
  console.log("Both numbers are equal");
}

// 5. Grade Calculator
let marks = prompt("5. Enter marks (0-100):");
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else if (marks >= 35)  { 
console.log("Grade: D");
} else {
  console.log("Grade: Fail");
}

// 6. Leap Year Checker
let year =prompt("6. Enter a year to check for leap year:");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// 7. Age Eligibility for Voting
let age =prompt("7. Enter your age:");
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// 8. Absolute Value
let num8 =prompt("8. Enter a number to find absolute value:");
console.log("Absolute value is:", num8 < 0 ? -num8 : num8);

// 9. Triangle Type Checker
let angle1 = prompt("9. Enter angle 1:");
let angle2 = prompt("Enter angle 2:");
let angle3 = prompt("Enter angle 3:");
if (angle1 + angle2 + angle3 === 180) {
  if (angle1 === angle2 && angle2 === angle3) {
    console.log("Equilateral triangle");
  } else if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
    console.log("Isosceles triangle");
  } else {
    console.log("Scalene triangle");
  }
} else {
  console.log("Not a valid triangle");
}

// 10. Smallest of Three Numbers (Only if and if-else)
let x = prompt("10. Enter first number:");
let y = prompt("Enter second number:");
let z = prompt("Enter third number:");

if (x < y && x < z) {
  console.log("Smallest is:", x);
} else if (y < z) {
  console.log("Smallest is:", y);
} else {
  console.log("Smallest is:", z);
}




// 1. Ternary Operator Examples

// 1.1 Check even or odd
let num1 = 7;
console.log("1.1", num1 % 2 === 0 ? "Even" : "Odd");

// 1.2 Check voting eligibility
let age = 17;
console.log("1.2", age >= 18 ? "Eligible to Vote" : "Not Eligible");

// 1.3 Greater of two numbers
let a = 10, b = 20;
console.log("1.3 Greater is:", a > b ? a : b);

// 1.4 Check divisible by 5
let num2 = 25;
console.log("1.4", num2 % 5 === 0 ? "Divisible by 5" : "Not Divisible");

// 1.5 Check vowel or consonant
let ch = 'e';
console.log("1.5", (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') ? "Vowel" : "Consonant");


// 2. Nested if-else Examples

// 2.1 Positive, Negative or Zero
let num3 = 0;
if (num3 > 0) {
  console.log("2.1 Positive");
} else {
  if (num3 < 0) {
    console.log("2.1 Negative");
  } else {
    console.log("2.1 Zero");
  }
}

// 2.2 Largest among 3 numbers
let n1 = 15, n2 = 22, n3 = 10;
if (n1 >= n2) {
  if (n1 >= n3) console.log("2.2 Largest:", n1);
  else console.log("2.2 Largest:", n3);
} else {
  if (n2 >= n3) console.log("2.2 Largest:", n2);
  else console.log("2.2 Largest:", n3);
}

// 2.3 Letter and vowel check
let c = 'i';
if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
  if ('aeiouAEIOU'.includes(c)) console.log("2.3 Vowel");
  else console.log("2.3 Consonant");
} else {
  console.log("2.3 Not a letter");
}

// 2.4 Even and divisible by 4
let num4 = 16;
if (num4 % 2 === 0) {
  if (num4 % 4 === 0) console.log("2.4 Even and divisible by 4");
  else console.log("2.4 Even but not divisible by 4");
} else {
  console.log("2.4 Not Even");
}

// 2.5 Grade based on 3 subject marks
let m1 = 78, m2 = 85, m3 = 90;
let avg = (m1 + m2 + m3) / 3;
if (avg >= 90) console.log("2.5 Grade: A");
else {
  if (avg >= 75) console.log("2.5 Grade: B");
  else {
    if (avg >= 50) console.log("2.5 Grade: C");
    else console.log("2.5 Grade: Fail");
  }
}


// 3. else-if Ladder Examples

// 3.1 Day of the week
let day = 3;
if (day === 1) console.log("3.1 Monday");
else if (day === 2) console.log("3.1 Tuesday");
else if (day === 3) console.log("3.1 Wednesday");
else if (day === 4) console.log("3.1 Thursday");
else if (day === 5) console.log("3.1 Friday");
else if (day === 6) console.log("3.1 Saturday");
else if (day === 7) console.log("3.1 Sunday");
else console.log("3.1 Invalid Day");

// 3.2 Grade using else-if
let marks = 82;
if (marks >= 90) console.log("3.2 Grade: A");
else if (marks >= 75) console.log("3.2 Grade: B");
else if (marks >= 60) console.log("3.2 Grade: C");
else if (marks >= 40) console.log("3.2 Grade: D");
else console.log("3.2 Grade: F");

// 3.3 Days in a month
let month = 2;
if (month === 2) console.log("3.3 28 or 29 days");
else if ([4, 6, 9, 11].includes(month)) console.log("3.3 30 days");
else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) console.log("3.3 31 days");
else console.log("3.3 Invalid month");

// 3.4 Temperature message
let temp = 35;
if (temp >= 40) console.log("3.4 Very Hot");
else if (temp >= 30) console.log("3.4 Hot");
else if (temp >= 20) console.log("3.4 Warm");
else if (temp >= 10) console.log("3.4 Cold");
else console.log("3.4 Very Cold");

// 3.5 Divisibility by 2 and/or 3
let num5 = 12;
if (num5 % 2 === 0 && num5 % 3 === 0) console.log("3.5 Divisible by both 2 and 3");
else if (num5 % 2 === 0) console.log("3.5 Divisible by 2 only");
else if (num5 % 3 === 0) console.log("3.5 Divisible by 3 only");
else console.log("3.5 Not divisible by 2 or 3");



