#! /usr/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congrats! You got a number.");
}
else {
    console.log("Oops! You guessed wrong number.");
    console.log("Please try again.");
}
