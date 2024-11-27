'use strict'
const arr = [0,3,0,6,0,2,1,0,12];
let count=0;
for(let i=0; i<arr.length; i++)
    arr[i]==0 ? count++ : 0;
console.log(count); 
