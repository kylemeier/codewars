//https://www.codewars.com/kata/80-s-kids-number-1-how-many-licks-does-it-take/javascript
function totalLicks(env) {
  let licks = 252;
  let hardestChallenge;
  
  for( keyName in env){
  
    const value = env[keyName];
    
    licks+=value;  
    if( value > (env[hardestChallenge] || 0) ) hardestChallenge = keyName;
  };
  
  return `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.`
    + (hardestChallenge ? ` The toughest challenge was ${hardestChallenge}.` : '');
}