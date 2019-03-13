/**for the problem in the constructor stealing
 * we can doing the same thing like in the constructor&prototype pattern
 * we inheritage the function or shared function using prototype. 
 * then using the call or apply to add the instance attr's
 */
function SuperType(name) {
    this.name =  name;
    this.colors = ['red','green'];
}

SuperType.prototype.sayName = function(){
    console.log('my name is: ' + this.name);
};

function SubType(name,age) {
    SuperType.apply(this,[name]);
    this.age = age;

}

SubType.prototype.sayAge = function(){
    console.log(this.age);
}

var instance1 = new SubType('mike',21);
instance1.colors.push('blue');
instancd1.sayName(); //mike
instance1.sayAge(); //21

var instance2 = new SubType('tylor',23);
instance2.sayAge(); //23
instance2.sayName(); //tylor
console.log(instance.colors); //['red','green']

