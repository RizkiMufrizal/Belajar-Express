const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");

module.exports = {
    showHelloWorld: (request, response) => {
        logger.info("Hello World Version v1");
        const message = {
            Success: true,
            Message: "Hello World"
        };
        return response.status(200).json(message);
    }
};
