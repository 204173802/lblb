const _ = require('lodash');
const moment = require('moment');
const axiosPromise = import('got');
const chalk = require('chalk');
const figlet = require('figlet');
const yargs = require('yargs');
const leftPad = require('left-pad');
const validator = require('validator');
const randomstring = require('randomstring');
const inquirer = require('inquirer');
const colors = require('colors');
const ora = require('ora');
const random = require('lodash.random');
const uuid = require('uuid');
const inquirerEmoji = require('inquirer-emoji');

function generateRandomUpperCaseSequence(length) {
  let sequence = '';
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    sequence += possibleChars[randomIndex];
  }

  return sequence;
}

console.log(chalk.blue(figlet.textSync('Welcome to lblb1 Project', { horizontalLayout: 'full' })));
console.log(chalk.green('Current Date and Time: ', moment().format('YYYY-MM-DD HH:mm:ss')));

axiosPromise.then(got => {
  got.default('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      console.log(chalk.yellow('Example HTTP Request Response:'));
      console.log(response.body);
    })
    .catch(error => {
      console.error(chalk.red('Error fetching data:', error));
    });
}).catch(error => {
  console.error('Error loading got module:', error);
});

const numbers = [1, 2, 3, 4, 5];
console.log(chalk.cyan('Sum of numbers using lodash:', _.sum(numbers)));

const args = yargs.argv;
console.log(chalk.magenta('Command line arguments:', args));

const paddedString = leftPad('npm is awesome!', 20);
console.log(chalk.blue('Left-padded string:', paddedString));

const email = 'test@example.com';
console.log(chalk.yellow(`Is ${email} a valid email address?`, validator.isEmail(email)));

const randomString = randomstring.generate(10);
console.log(chalk.green('Random string:', randomString));

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => {
    console.log(chalk.blue('Hello', answers.name, '!'));
  });

(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await response.json();
    console.log(chalk.yellow('Node-fetch library HTTP Request Response:'));
    console.log(json);
  } catch (error) {
    console.error(chalk.red('Error fetching data with node-fetch:', error));
  }
})();

console.log(colors.red('This text is red!'));

const spinner = ora('Loading...').start();
setTimeout(() => {
  spinner.succeed('Data loaded successfully');
}, 2000);

console.log(chalk.blue('Random number using lodash.random:', random(100)));

console.log(chalk.green('Generated UUID:', uuid.v4()));

inquirerEmoji
  .prompt([
    {
      type: 'emoji',
      name: 'favoriteEmoji',
      message: 'What is your favorite emoji?'
    }
  ])
  .then(answers => {
    console.log(chalk.yellow('Your favorite emoji is:', answers.favoriteEmoji));
  });

console.log(chalk.yellow('Random uppercase sequence:', generateRandomUpperCaseSequence(10)));