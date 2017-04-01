//Fibonacci Problem: Find sum of only even numbers in Fib sequence from 0 - 4^6.

/*Couldn't figure this out on my own. No idea why neither solution works...*/


var fib[],i=0, j=1, x=1, sum=0;
  while (x<4000000){
    x=i+j;
    i=x-i;
    j=x;
    fib.push(x);
  }
 for (i=0; i<fib.length; i++){
   if (fib[i]%2===0){
     sum=sum+fib[i];
   }
 }
console.log(sum);




/*Someone please tell me why my code below doesnt do the same thing as the one above. Very new to this and got the Fibonacci function from Stack Overflow and I can't figure out why it doesnt work.*/

/*fib=function(numMax){
  for(var fibArray= [0,1], i=0,j=1,k=0; k<numMax; i=j, j=x, k++ ){
    x=i+j;
    fibArray.push(x);
  }
 
}

fib(4000000);

var fibSum=0;

for(i=0; fib(i)<4000000; i++){
    if(fib(i)%2===0){
      fibSum=fibSum+fib(i);
    }
  }


console.log(fibSum);
*/

