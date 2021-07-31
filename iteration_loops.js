for(let count=1; count <=10 ; count++){
  console.log(`THIS IS ${count} TIME`);
}

const david = [
  'Gunalan',
  'Deivaganapathy',
   2012 - 2019,
  'Developer',
  ['another','array','inside'],
  'Spain',
];

types = []
for (let  j  = 0;j < david.length; j++){
  console.log(david[j] , typeof david[j]);
  //filling an array
  types[j] = typeof david[j]; // storing the types in the new list like append in python

  types.push(typeof david[j]); // push will add the new elements
}

console.log(types);


years = [1998,1997,1996,1995]
current_year= 2021
age = []
for(let i = 0 ; i < years.length ; i++){
  age.push(current_year-years[i]);
}
console.log(age);



c
