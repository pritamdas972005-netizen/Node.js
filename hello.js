//Print “Hello, Node.js!” to the console.
console.log("hello, Node,js!");
//Use console.warn to display a warning message.
console.warn(" Try to agine!");
//Use console.error to display an error message.
console.error(" Anwser is not correct!");
//Use console.table to print an array of objects.
const student=[
    {id:1,name:"jhon",age:18,department:"IT", salary:25000},
    {id:2,name:"peter",age:20,department:"Data Scenice", salary:35000},
    {id:3,name:"Rintu",age:45,department:"Network Enginee", salary:7000},

]
console.table(student);

//Use console.count to count how many times a piece of code runs.
for(let i=0;i<5;i++){
    console.count(i);
}

