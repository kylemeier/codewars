//https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
function tickets(peopleInLine){

  const cashOnHand = {
    25:0,
    50:0,
    100:0
  };
    
  for( let i = 0; i < peopleInLine.length; i++){
    
    const cashGiven = peopleInLine[i];
    
    if( cashGiven === 50 ){ 
      cashOnHand['25'] --;
    }
    else if( cashGiven === 100 ){
    
      if( cashOnHand['50'] ){
        cashOnHand['50'] --;
        cashOnHand['25'] --; 
      }
      else{
        cashOnHand['25'] -=3;  
      }
    }
    
    if( cashOnHand['25'] < 0 || cashOnHand['50'] < 0 ) return 'NO';
    
    cashOnHand[cashGiven]++;
  }
  
  return 'YES';
}