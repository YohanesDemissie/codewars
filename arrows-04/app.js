'use strict';

let globalThis = this
function foo () {
    console.log('globalThis', globalThis)
    console.log('functokn scoped this', this)
}

function logger (input) {
    return console.log('user logged:', input)
}

//arrow function
//the functino key word gets replaced by =>

let logger = (input) => {
    return console.log('user logged:', input)
}

//below also removes the return keyword but has the same function ... see below
let logger = (input) => console.log('user logged:', input)

// you can even remove the perentheses with this new method
let logger = input => console.log('user logged:', input)


