/**
 * it's steal the other's construct function using the apply or call
 * this advantage is using the other's constructor function to inti all attr and can add extra arguments
 * to the constructor stealing function.
 * but a disadvantage is this function actually like the constructor pattern, it actually just reduce your 
 * work on write the same code, and u have do a fully copy of all attr in the stealed function.
 * So, it's not using frequently 
 */
function SuperType(){
    this.color = ['red','black'];
}

function SubType(){
    SuperType.call(this);
    this.background = 'yellow';
}

var instance1 = new SubType();
instance1.color.push('green');

var instance2 = new SubType();

console.log(instance1.color); //['red','black','green']
console.log(instance2.color); //['red','black']

