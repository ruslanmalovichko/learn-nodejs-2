var myFruit = function(fruitArray,pickOne) {
  return fruitArray[pickOne - 1];
}

fruit = ['apples','oranges','limes','cherries'];
myFruit(fruit,2);
myFruit(fruit,0);
var myFruit = function(fruitArray,pickOne) {
  if (pickOne <= 0) return 'invalid number';
  return fruitArray[pickOne - 1];
};

myFruit(fruit,0);
myFruit(fruit,1);

