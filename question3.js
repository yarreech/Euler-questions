// Problem number 3:

/* The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?*/


// I am literally in love with my function to find prime numbers, probably the most effective function I've ever written ;)
 
var prime = function(number){                   //function to check whether the number is prime or not
    
    var limit = number;
    
    if(number<2){
        return false;
    }
    else if(number === 2){
        return true;
    }
    else{
        for(var i = 2; i<=limit; i++ ){
            if(number%i === 0){
                return false;
            }
            limit = number/i;
        }
        return true;
    }    
};


//Main Program:
var user = prompt("Enter the number :");        //take the number from user
var limit = user;
var largest;

if(user<2){
    console.log("No Prime factor!!!!");         //no prime factors of numbers less than 2
}
else{
    if(prime(user)){
        largest = user;                         //a prime number is it's own largest prime factor 
    }
    else{
        for(var i = 0; i<=user; i++){
            if(user%i === 0 && prime(i)){       //quest to find the largest prime factor
                largest = i;
            }
        }
    }
    console.log(largest);
}
