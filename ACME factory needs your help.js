//https://www.codewars.com/kata/56fd862db0c52efd9e0018f9
function factory(assemblyLines){

  const products = assemblyLines
    .reduce( (result, line) => result = result.concat( typeof line === 'function'? line() : line ), [] )
    .sort( (a,b) => a.priority - b.priority )
    .map( item => item.item );
  
  const shipments = [];
  
  while(products.length){
    shipments.push(products.splice(0,10));
  }
  
  return shipments;
}