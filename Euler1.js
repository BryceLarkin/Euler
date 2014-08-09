//Find the sum of all the multiples of 3 or 5 below 1000.
var Sums = 0;
var Multiples = 1;

while(Multiples < 1000) {
    if(Multiples%3===0 || Multiples%5===0){
        Sums = Multiples + Sums;
        Multiples = Multiples + 1;
    }
    else{
        Multiples++;
    }
}
console.log(Sums);