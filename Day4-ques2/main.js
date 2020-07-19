const student = {name:"Helsinki",
 age:24,
project: {dice_game :"Two player dice game using javascript"}}

console.log(student.name);
console.log(student.age);
console.log(student.project.dice_game);

const {name,age} = student;
const {dice_game} = student.project;

console.log(name, age, dice_game);


