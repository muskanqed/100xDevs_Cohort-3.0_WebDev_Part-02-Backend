const fs = require("fs");
const { Command } = require("commander");

const program = new Command();

program
  .name("Counter")
  .description("CLI to do file related tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of words in a file")
  .argument("<file>", "File to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(" ").length;
        console.log(`There are ${words} in the ${file}`);
      }
    });
  });

program.parse();

// console.log(process.argv);
// Gives the arguments used while giving the command
//alias WordcountCli="node index.js"(pure bash)
// Set-Alias WordcountCli "node"(windows)
