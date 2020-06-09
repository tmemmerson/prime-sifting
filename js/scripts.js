
//we check all values, starting with an index of 1 and incrementing by 1 again <=5. 
//For all those values that the remainder of dividing those values by 2 is 0 (meaning they are even), display that output in console
for (let i =1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

//same function as above. just decremementing. will output reversal of ^
for (let i =5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}
