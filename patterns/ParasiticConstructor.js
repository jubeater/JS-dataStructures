/**
 *this pattern can encapsulate the attr
 but it actually have no relation with the constructor Person and Person's prototype.
 so it's not recommended to using this pattern, the result is not an instance of Person.
 */

 function Person(name,age,job) {
     var o = new Object();
     var b = 'lala';
     o.name = name;
     o.age = age;
     o.job = job;
     o.sayName = function(){
         console.log('my name is: ' + this.name);
     }
     return o;
 }

var person1 = new Person('jubeater',20,'developer');
person1.sayName();
person1.name; // undefined, cuz the return is the object o, we can only access the attr from o 
