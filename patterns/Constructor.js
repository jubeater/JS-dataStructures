/*
the constructor pattern is the most basic pattern in js
*/
function Person(name, age ,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log("my name is: " + this.name);
    };
}

var person1 = new Person('jubeater',27,'developer');
/*
this disadvantage of constructor pattern:
when it create the instance, if there is a method in constructor, 
then all the instance will have a copy of the method. which is the cost of memo and
decrease the effiency.
*/