const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
//while loop example
while (i < ingredients.length){
  console.log(ingredients[i]);
  i ++;
}
//for loop example
for(let j=0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}
//reverse for loop example
for(let k=ingredients.length-1; k > -1; --k){
  console.log(ingredients[k]);
}