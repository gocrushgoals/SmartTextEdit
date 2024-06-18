/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\n// Add an event handler for the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', event => {\n  // Prevent the default mini-infobar from appearing on mobile\n  event.preventDefault();\n  // Stash the event so it can be triggered later\n  window.deferredPrompt = event;\n  // Remove the hidden class from the install button\n  butInstall.style.display = 'block';\n  butInstall.addEventListener('click', async () => {\n    // Show the install prompt\n    const promptEvent = window.deferredPrompt;\n    if (!promptEvent) {\n      return;\n    }\n    // Show the install prompt\n    promptEvent.prompt();\n    // Wait for the user to respond to the prompt\n    const {\n      outcome\n    } = await promptEvent.userChoice;\n    // Log the user's response to the prompt\n    console.log(`User response to the install prompt: ${outcome}`);\n    // Clear the deferred prompt variable, since it can only be used once\n    window.deferredPrompt = null;\n    // Hide the install button\n    butInstall.style.display = 'none';\n  });\n});\n\n// Add an event handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', event => {\n  // Log the event\n  console.log('PWA was installed', event);\n  // Clear the deferred prompt\n  window.deferredPrompt = null;\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;