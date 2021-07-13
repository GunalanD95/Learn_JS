function helloWorld() {
  console.log("HI IAM GUNALAN AND THIS IS MY FIRST JS FUNCTION");
}

var name;
function secondFun(name) {
  console.log("MY NAME IS  " + name);
}

function thirdFun(name) {
  console.log(`MY NAME IS ${name}`);
}

helloWorld();       // HERE WE ARE CALLING THE FUNCTION
helloWorld;        // HERE WE ARE REFERENCING THE FUNTION
secondFun("GUNA");
thirdFun('MESSI');

function helloSpain() {
  return "hola yo soy gunalan , buenas dias"
}

var greetinspainsh = helloSpain(); // declaring a var and storing the value of the function returning
console.log(greetinspainsh);
console.log(helloSpain());
