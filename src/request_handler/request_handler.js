const config = require("../../config/config");
const startTokenDataHandler = require("./transaction");
const startOvenDataHandler = require("./ovens");

module.exports.startRequestHandler = () => {
    // startTokenDataHandler();
    startOvenDataHandler();
    setInterval(() => {
        // startTokenDataHandler();
    }, config.SET_TIMEOUT);
};