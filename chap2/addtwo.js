var base = 2;

exports.addtwo = function(input) {
  console.log(input);
  console.log(base);
  console.log(global);
  return parseInt(input) + base;
};
