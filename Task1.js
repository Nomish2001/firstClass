'use strict'

const num = 2;
const div2 = Number(num%2==0);
const div3 = Number(num%3==0);
const div5 = Number(num%5==0);
const sum = div2+div3+div5;
console.log(Number(sum))==0 && console.log(0)