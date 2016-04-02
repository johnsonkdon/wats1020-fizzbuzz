//count numbers 1 - 20 and see if they are devisable by 3,5 or both. 
var rangelimit = 100;

for (i=1; i<=20; i++){
//for each number do the following check:

	//see if it is devisable by 3 
	if (i % 3 ===0) {
	
		//see if it is also devisable by 5 
		if ( i % 5 === 0) {
			//if devisable by 3 and 5: Print FizzBuzz
		    console.log('fizzbuzz');
   } else { 
   		//if so: print Fizz 
	   console.log('Fizz');
   }
} else if (1 % 5 === 0) { 
	//see if it is devisable by 5 
   //if so: print buzz
	console.log ('Buzz');
} else {  
	//see if it is not devisable by 3 or 5
	//if so: print number
	console.log(i);
	}
}



