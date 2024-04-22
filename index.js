#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 6688;
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (PinAnswer.pin === myPin) {
    console.log("correct your pin code!!!");
    let operation = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operation.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            console.log("Please take your cash");
            myBalance -= amountAns.amount;
            console.log(`your remaning balance is ${myBalance}`);
        }
        else {
            console.log("insufficiant Balance");
        }
        ;
    }
    if (operation.operation === "fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            }
        ]);
        if (amountAns.amount <= myBalance) {
            console.log("Please take your cash");
            myBalance -= amountAns.amount;
            console.log(`your remaning balance is ${myBalance}`);
        }
        else {
            console.log("insufficiant Balance");
        }
        ;
    }
    if (operation.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
    ;
}
else {
    console.log("inorret your pin number");
}
;
