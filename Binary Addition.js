//https://www.codewars.com/kata/binary-addition/javascript
function addBinary(a,b){
  return (a+b >> 0).toString(2);
}