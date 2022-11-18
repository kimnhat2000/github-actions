const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  // const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const path = "https://cache.agilebits.com/dist/1P/op2/pkg/v2.7.3/op_apple_universal_v2.7.3.pkg"
  const pathToCLI = await tc.downloadTool(getDownloadURL(path));

  // Extract the tarball onto the runner
  // const pathToCLI = await tc.extractTar(pathToTarball); //pkg file.

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

setup().then(
  function(value) {console.log("1password CLI downloaded")},
  function(error) {console.log("something is wrong")}
)

module.exports = setup