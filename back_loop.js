const obj = [
   "gunalan",
   "deivaganpathy",
   23,
   ['sia','lucia','perdon']
];

// for (let n = 0 ;n < obj.length ;n++){
//   console.log(obj[n]);
// }

// for (let n = obj.length - 1; n>=0 ;n--){ // for (counter , condition , increment)
//   console.log(obj[n]);
// }

for (let k = 1; k < 4 ;k++){ // for (counter , condition , increment)
  console.log(`${k} starting`);
  for (let n = obj.length - 1; n>=0 ;n--){ // for (counter , condition , increment)
    console.log(obj[n]);
  }
}

const bills = [111,222,333,444,555,666,777,888,999,1000]
const tips = []
const totals = []

const caltip = function(tip) {
  return bills >= 50 && bills <= 300 ? tip * 0.15 : tip * 0.20
}

for (let g = 0; g<= bills.length ; g++){
  const tip = caltip(bills[g])
  tips.push(tip)
  console.log(tips);
  totals.push(tip + bills[g])
  console.log(totals);
}
arr=[1,2,3]
const calave = function(arr) {
  let sum = 0
  for (u= 0 ; u < arr.length ; u++){
    sum += arr[u]
  }
  console.log("ha ha",sum);
}

calave(arr)
