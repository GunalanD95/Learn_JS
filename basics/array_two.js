function isEven(element) {
  return element%2 === 0;
}

var n = ['2','4','6'].every(isEven)
console.log(n);

// CALLBACK ARROW
// var array = [].every(() => {});
var n1 = ['2','3','6'].every((e) => {
  return e % 2 === 0;
})
console.log(n1);


var Guna =(n)=>{
  return true
}

console.log(Guna(2));
