//https://www.codewars.com/kata/584ebd7a044a1520f20000d5
function* range(){

  let currentValue = 1,
      step = 1,
      stop;
  
  switch(arguments.length){
    case 3:
      step = arguments[1];
    case 2:
      currentValue = arguments[0];
    case 1:
      stop = arguments[arguments.length-1];
  }
    
  while(currentValue <= stop){
    yield currentValue;
    currentValue+=step;
  }
}