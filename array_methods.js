const countries = ["spain","germany","france","portgual","belgium"]


countries.push("italy") // will add the element at the end of the list
countries.unshift("poland") // will add the element at the start of the list
console.log(countries);
countries.pop() // will remove the last element of the array
countries.shift() // will remove the first element of the array
console.log(countries);
console.log(countries.indexOf('france')); //  find the position of the element in the array


console.log(countries.includes('Ukraine')); // will check the element in the array present


if (countries.includes('france')){
  console.log("YES FRANCE IS PRESENT");
}


const caltip = function(tip) {
  return tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.20
}

const bills = [200,500,650,420];

const tips = [caltip(bills[0]),caltip(bills[1]),caltip(bills[2]),caltip(bills[3])]
console.log(tips);

total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2], bills[3] + tips[3]]
console.log(total);
