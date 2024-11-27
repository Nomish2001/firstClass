'use strict'
function isPrime(num){
    if(num < 2)
        return false;
    for(let i=2; i<Math.sqrt(num); i++)
        if(num%i==0)
            return false;
        return true;
}
for(let x=2; x<237; x++)
    if(isPrime(x))
        console.log(x);