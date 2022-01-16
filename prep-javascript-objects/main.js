const person = {
  firstName: 'Christina',
  lastName: 'Le',
  hobby: 'hiking'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');

person.job = 'student';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'restaurant manager';
console.log("The person's previous job is: " + person.previousJob + '.');

console.log(person);
