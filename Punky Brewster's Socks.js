//http://www.codewars.com/kata/80-s-kids-number-3-punky-brewsters-socks/javascript
function getSocks(name, socks) {

  let result = [];

  if(name === 'Punky'){
  
    const firstColor = socks[0];
    const secondColor = socks.find( sock => sock !== firstColor );
    result = secondColor? [firstColor, secondColor] : [];
  }
  else{
    
    const match = socks.find( (sock, i) => socks.indexOf(sock, i+1) !== -1 );
    result = match? [match, match] : [];
  }
  
  return result;
}