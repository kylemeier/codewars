//https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n) {
  return Array.from({length: n}, (v,k) => x*(k+1));
}