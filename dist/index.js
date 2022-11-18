/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 521:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(396);
const tc = __nccwpck_require__(617);

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

/***/ }),

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 617:
/***/ ((module) => {

module.exports = eval("require")("@actions/tool-cache");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const setup = __nccwpck_require__(521);

async function run() {
  console.log(
    "connected, this line run from a js file that connect 1password with github actions"
  );
}

run();

})();

module.exports = __webpack_exports__;
/******/ })()
;