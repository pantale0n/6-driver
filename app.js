const hasLicence = true;
const age = 18;
const isDrunk = true;

const result = age >= 18 && hasLicence && !isDrunk;
console.log(`Вести машину ${result ? 'может': 'не может'}`);