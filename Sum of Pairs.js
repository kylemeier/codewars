//https://www.codewars.com/kata/54d81488b981293527000c8f
function sum_pairs(ints, s){

    const seen = {};
    
    for(let int of ints){
      //if value needed for the sum has already been seen
      //we can return with the correct result
      if( seen[s - int] ) return [s-int, int];
      seen[int] = true;
    }
}