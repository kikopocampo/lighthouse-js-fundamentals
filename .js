/*for (let i = 100; i <= 200; i++){
  if(i%3===0 && i%5===0){
    console.log("Loopy Lighthouse")
  }else if (i%5===0){
    console.log("Lighthouse")
  }else if (i%3===0){
      console.log("Lighthouse")
    }else {
      console.log(i)
    }
  }
 

  for (let i = 100; i <= 200; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("Loopy Lighthouse");
    }else if (i % 5 === 0){
      console.log("Lighthouse");
    }else if (i % 3 === 0){
      console.log("Loopy");
    }else {
      console.log(i);
    }
  }
  */

const amounts = [61.00, 52.25, 112.99, 5.00];
/*let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);*/

let total = 0;
for (let amount of amounts) {
  total = total + amount;
}
console.log('Order total is: ', total);