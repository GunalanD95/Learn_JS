const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);
console.log(BMImark,BMIjohn);

var bool = BMImark > BMIjohn;
console.log(bool);
console.log(`${massMark}`);

if (BMImark>BMIjohn){
  console.log(`Mark BMI is greater here which is ${BMImark}`)
}
else{
  console.log(`John's BMI is greater than Mark's`)
}
