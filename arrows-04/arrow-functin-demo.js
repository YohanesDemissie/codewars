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

// for loop shortened too from jQuery to arrow function here below
let arr = [1, 2, 3, 4]
// replacing this jQuery for each function
// arr.forEach(function(ele, idx, arr) {
//     arr[idx] * 2
// }) which is saying for each element within the index of the array, return it multiplied by 2
arr.forEach((ele, idx, arr) => arr[idx] * 2)




