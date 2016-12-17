//https://www.codewars.com/kata/are-they-the-same/javascript
function comp(array1, array2){

  if(!array1 || !array2) return false;
  
  //cloning to not mutate input
  const array1Sorted = [...array1].sort( (a,b) => a-b );
  const array2Sorted = [...array2].sort( (a,b) => a-b );
  
  return array1Sorted
          .map( num => num*num)
          .every( (num,i) => num === array2Sorted[i] );
}