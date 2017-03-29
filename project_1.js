var multipleSum=0;
for(var i=0; i<1000; i++){
	if(i%3===0 || i%5===0){
		multipleSum=multipleSum+i;
	}
}

console.log(multipleSum);







//Solution below for any number

/*var multiples = function(num){  
  
	var multipleSum=0;

	for(var i=0; i<num; i++){
  		if(i%3===0 || i%5===0){
  
  			multipleSum+=i;
  		}
	}
return multipleSum;
}


console.log(multiples(1000));*/