const setup = require("./addCLI");
const test = require("./test")

async function run() {
  console.log(
    "connected, this line run from a js file that connect 1password with github actions"
  );
  setup ()
}

run();
