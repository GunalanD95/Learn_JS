function makecoffe(number) {
  return number * 3;
}

function MakeTea(milk,level,num) {
  const nums  =  makecoffe(num) // creating a val and calling another function here
  const tea = `Could you make ${nums} ${level} with ${milk} milk`
  return tea
}
b = MakeTea("Cow","tea",1)
console.log(b);
