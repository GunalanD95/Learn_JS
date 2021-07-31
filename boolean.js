const isBoy = true;
const isProgrammer = true;
const isBestProgrammer = false;

console.log(
  isBoy && isProgrammer // here and will check both are true else return false
);

console.log(
  isBoy || isProgrammer // here or will check anyone of the condition is true else return false
);

console.log(
  isBoy && isProgrammer && !isBestProgrammer
);
