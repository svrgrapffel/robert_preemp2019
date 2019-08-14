const program = require("commander");
const inquirer = require("inquirer");

const create = require("./create");
const read = require("./read");
program
  .command("createProduct")
  .alias("c")
  .action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "ENter product name..."
        },
        {
          type: "input",
          name: "price",
          message: "ENter product price..."
        }
      ])
      .then(answers => {
        create(answers);
      });
  });

program
  .command("readProduct")
  .alias("r")
  .action(() => {
    inquirer
      .prompt([
        { type: "input", name: "name", message: "Enter product to read" }
      ])
      .then(answer => {
        read(answer);
      });
  });
// console.log(process.argv);

program.parse(process.argv);
