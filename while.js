const obj = [
   "gunalan",
   "deivaganpathy",
   23,
   ['sia','lucia','perdon']
];

let count = 0
while (count <=10) {
  console.log(`HI now count is ${count}`);
  count++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`HA HA ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
