var decArray = [23, 255, 122, 5, 16, 99];
// var hexArray = decArray.map(element => element.toString(16)); // 16 is radix in hexadecimal numbers
var hexArray = decArray.map(element => element.toString());

console.log(hexArray); // ["17", "ff", "7a", "5", "10", "63"]

