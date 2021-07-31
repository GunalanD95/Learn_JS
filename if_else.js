const age = 12;
const isOld = age >= 18;

if (isOld){
  console.log(`you are eligible to vote `);
}
else{
  const years_left =  18 - age;
  console.log(`you have to wait for ${years_left} more years to get right to vote`);
}
