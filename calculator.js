// ES6 Style of writing JS code
var calculator={
    sum:function (number1, number2){

        return number1+ number2;
    },
    sub:function (number1, number2){

        return number1- number2;
    }
}

module.exports = calculator; //making the calculator object available across js scripts

// // ES5 Style of writing JS code
// var calculator={
//     sum:function (number1, number2){

//         return number1+ number2;
//     },
//     sub:function (number1, number2){

//         return number1- number2;
//     }
// }