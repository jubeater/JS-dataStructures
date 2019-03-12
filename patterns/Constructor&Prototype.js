/*
Because all the instance of prototype pattern share the same properties, so 
we can combine the prototype pattern with constructor pattern
 */

function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
}

var person1 = new Person('a',21,'writer');
var person2 = new Person('b',22,'waiter');
person1.sayName()  // a
person2.sayName()  // b
person1.sayName === person2.sayName // true