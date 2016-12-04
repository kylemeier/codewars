//https://www.codewars.com/kata/5660aa3d5e011dfd6e000063
const findSpaceship = (map) => {
  
  if(!map || map.indexOf('X') === -1) return 'Spaceship lost forever.';
  
  const mapAsArray = map.split('\n');
  
  for( let i = mapAsArray.length-1, yLocation = 0; i >= 0; i--){
    
    const xLocation = mapAsArray[i].indexOf('X');
    
    if( xLocation !== -1 ) return [xLocation, yLocation];
    yLocation++;
  }  
}