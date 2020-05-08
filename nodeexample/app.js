var validator= require('validator');
var chalk= require('chalk');

var emailcheck= validator.isEmail('a@gmail.com')
console.log(emailcheck)

 
// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
 
console.log(chalk.red('Error!'));
console.log(chalk.blue('Warning!'));