function isOdd(element) {
  if (element % 2 == 0){
    return true;
  }
  return false
}

function isEven(element) {
  return element%2 === 0;
}

var isEven = (element) =>{
  return element%2 === 0;
}

console.log(isOdd(12));
console.log(isEven(3));
