//1.

for(let num=1; num<=10; num++)
{
    console.log(num)
}

//2.

for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}

//3.

let N = prompt("Enter a number:");
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum = sum + i;
}

console.log("Sum from 1 to " + N + " is: " + sum);

//4.

let input=prompt("enter a no")

for(let i=1;i<=10;i++){
    console.log(input+"X"+i+"="+(input*i))
}