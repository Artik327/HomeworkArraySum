let question = prompt("Choose the number")
let m = [];

for(let i = 0; i < question; i++){
    m.push(Math.floor(Math.random() * 1000)); 
}

console.log(m);

function ArraySum(array){
   let sum = 0;
   for (let i = 0; i < m.length; i += 1){
    sum += m[i];
   }
   return sum;
}
console.log(ArraySum(m));

