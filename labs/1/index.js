const Adder = require ("./Adder.js");

let x = new Adder (
    {
        a: 5,
        b: 10
    }
);
console.log(x.render());