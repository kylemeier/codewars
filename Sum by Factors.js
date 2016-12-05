//https://www.codewars.com/kata/sum-by-factors/javascript
function sumOfDivided(lst) {

  let primeFactors = {};
  
  lst.forEach( num =>{
  
    if(num % 2 === 0) addToPrimeFactors(2, num);
    
    let i = 3;
    
    while(i<=Math.abs(num)){  
      if( num % i === 0 && (primeFactors[i] || isPrime(i)) ) addToPrimeFactors(i, num);
      i+=2; 
    }
  });
  
  function addToPrimeFactors(primeFactor, num){
    primeFactors[primeFactor] = primeFactors[primeFactor] || 0;
    primeFactors[primeFactor]+=num;
  }

  const result = [];
  
  for( primeFactor in primeFactors ){
    result.push([ parseInt(primeFactor), primeFactors[primeFactor] ]);
  }
  
  return result.sort( (a,b) => a[0]-b[0] );
}

function isPrime(num){
  if(num % 2 === 0) return false;
  
  for(let i = 3; i*i <= num; i+=2){
    if(num % i === 0) return false;
  }
  
  return true;
}