console.warn("This is a warning!")
console.error("This is an error!") 

var b=20
console.log(b)

var b=30
console.log(b)

let a=32
console.log(a)

let num1=2
num1+=3

console.log(num1)
let a1=num1++
console.log(a1)
++a1
console.log(a1)

let flag1=true;
let flag2=false;

console.log((flag1!=flag2 && 2==3))

let c=5
let d=9
if(c>d){
    console.log("5 is greater than 9")
}
else if(c<d)
{
    console.log("5 is lesser than 9")
}
else
{
    console.log("They both are equal")
}



const fruits=["apple","banana","cherry"]
for(i=0;i<3;i++){
    console.log(fruits[i])
}
fruits.forEach((item)=>console.log(item))
sum=0
for(let i=0;i<10;i++)
{
    sum+=i;
}
console.log(sum)


function hello(a,b)
{
    let tot=a+b;
    window.alert(tot)

   
}
hello(40,90)

let diff=(a,b)=>{
    return a-b;
}
let op=diff(10,4)
console.log(op)

let num=[10,20,30,40];
let dubnum=num.map(item=>console.log(item*2))
