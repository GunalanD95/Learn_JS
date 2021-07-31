const age = 17;

age >= 18 ? console.log("VOTE") : console.log("NO VOTE");

const drink = age >=18 ? "VOTE" : "NO VOTE";
console.log(drink);

const bill = 380;

const tip =  bill <= 300 && bill>=500 ? bill *0.15 : bill * 0.20
console.log(`the bill is ${bill} and the tip is ${tip} with the total value as ${bill + tip}`);
