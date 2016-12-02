//https://www.codewars.com/kata/dependency-injection/javascript

class DI{
  constructor(dependency){
    this.dependency = dependency;
  }
  
  inject(func){
  
    let args = /\(.*(?=\))/.exec( func.toString() )[0];
    
    args = args.slice(1).split(/\s?,\s?/)

    const dependencies = args.reduce( (result, arg) =>{
    
      const item = this.dependency[arg];
      if( item ) result.push(item);
      
      return result;
    },[]);
  
    return func.bind(null, ...dependencies);
  }
}