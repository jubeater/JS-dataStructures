/*
the prototype pattern can share varibale and instance among instance
*/

function Person(){}

Person.prototype.name = 'jubeater';
Person.prototype.age = 27;
Person.prototype.job = 'Developer';
Person.prototype.sayName = function(){
    console.log('my name is: ' + this.name);
};



var person1 = new Person();
var person2 = new Person();
person1.name === person2.name;
/*
Person.prototype.constructor === Person if we using the above Prototype pattern
*/ 

//another way to create the prototype pattern
function Person(){}

Person.prototype = {
    name: 'jubeater',
    age: 27,
    job: 'developer',
    sayName: function(){
        console.log('my name is: ' + this.name);
    }
}
var person1 = new Person();
/*
Person.prototype.constructor === object, because we using the object literal create method,
which means we using the object as the constructor, so we will also lose all attr in constructor 
function
A walkaround way is to add a new line
by delegate the constructor, we will using the constructor patter to construct the instance 
with the prorotype we given to it
*/
Person.prototype = {
    constructor: Person,
    name: 'jubeater',
    age: 27,
    job: 'developer',
    sayName: function(){
        console.log('my name is: ' + this.name);
    }
}

/*
we need to notice that if we using the second way to assign the prototype, then all the attr
from prev prototype is gone. Because __proto__ is an object, we are making __proto__ point to
another object
*/

function Person(){}
Person.prototype.name = 'before';

var a = new Person();
console.log(a.name) //  before

Person.prototype = {
    age: 25
}

var b = new Person();
console.log(a.name) // before (the a's __proto__ is not changed)
console.log(b.name) // undefined
console.log(a.age)  // undefined
console.log(b.age)  // 25


/* 
actually, for the Array(), String(), the method are from their __proto__ object
*/