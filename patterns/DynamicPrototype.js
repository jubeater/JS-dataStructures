/**
 * actually i don't know when using this pattern
 * it seems hack, cuz if the construct don't have the atttr, then add it to
 * it's proto make all the instance contains this attr
 * here is the example below
 */

 function Person(name,age,job){
     this.name = name;
     this.age = age;
     this.job = job;
     if (typeof this.sayName != 'function') {
         Person.prototype.sayName = function() {
             console.log('my name is: ' + this.name);
         }
     }
 }

