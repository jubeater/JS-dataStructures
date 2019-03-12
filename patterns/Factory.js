/*
the factory pattern is just like a normal function. 
It's more often used when the developer want to encapsulate the creation of the object
*/
function createPerson(name,age,job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log('my name is: ' + this.name);
    };
    return o;
}

var pserson1 = createPerson('jubeater',27,'developer');