/**this pattern original way */
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var person = {
    name: 'john',
    age: 21
}

var anotherone = object(person);
anotherone.name; //john
anotherone.age; //21

var one = object(person);
one.name; //john
one.age; //21

anotherone.name = 'mike';


anotherone.name; //mike  it add the name attr in it's own object, so it will not read the prototype's name attr
one.name; //john   cuz the prev expression not modify the value in prototype objejct

/**we can using the object.create now */
var person = {
    name: 'john',
    age: 21
}

var anotherone = Object.create(person,{
    name: {
        value: 'jubeater'
    }
});

anotherone.name // 'jubeater' 
anotherone.__proto__.name // 'john';
