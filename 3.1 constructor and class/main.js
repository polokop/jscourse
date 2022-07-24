//Module 3 task 1

//function, that create new object and set uniq prototype
function MyOwnObject (value1, value2){
    this.value1 = value1;
    this.value2 = value2;
    MyOwnObject.myFirstUniqPrototype =  'hello!'
    }
    
    
//create object from function constructor
const obj = new MyOwnObject(22,11);
//console.log(obj)
    
//check than personal prototype work
console.log( obj.constructor.myFirstUniqPrototype )
    
//set property not writable and not configurable
Object.defineProperty(obj, 'value1', {
    writable: false,
    configurable: false } )
    
    
    
    
    
    
////// the same, but with using class
    class MyClass {
        constructor (value1,value2){
          this.value1 = value1;
        this.value2 = value2;
      }
      myProperty(){return this.value1 + this.value2}
    }
    
    
    const cl = new MyClass(11,22)
    //console.log(cl)
    //console.log(cl.myProperty())
    
    Object.defineProperty(cl, 'value1', {
                writable: false,
          configurable: false } )
    
    