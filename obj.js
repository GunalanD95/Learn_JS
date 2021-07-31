const obj = {
  FULLNAME : "gunalan",
  LASTNAME : "deivaganpathy",
  age : 23,
  friends : ['sia','lucia','perdon']
}
console.log(obj);

// data accessing in the dict/objs
console.log(obj.FULLNAME);
console.log(obj['age']);
const name = "NAME";
console.log(obj['LAST' + name]);

const v = prompt("what data you want:")
console.log(obj[v]); // passsing the value from prompt value

if(obj[v]){
  console.log(obj[v]);
}


console.log(`${obj.FULLNAME} age is ${obj.age} and he has ${obj['friends'].length} friends and his best friend is ${obj['friends'][0]} `)
