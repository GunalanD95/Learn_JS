var name ='raj'

console.log("LINE NUMBER 3 " + name);

function callName() {
  var name = "GUNA";
  console.log("LINE NUMBER 6 " + name);
  callName2();
  function callName2() {
    console.log("LINE NUMBER 9 "+ name);
  }
}

callName();

# REMEMBER THE ICE CREAM
