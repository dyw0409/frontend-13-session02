const mapWithCallback = (arr, callback)=>{
     return arr.map(callback);
}

const double = n=> n*2;
const addTen = n => n+20;

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));