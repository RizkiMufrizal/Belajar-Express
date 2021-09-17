const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");

module.exports = {
    showHelloWorld: (request, response) => {
        logger.info("Hello World Version v2");
        const message = {
            Success: true,
            Message: "Hello World"
        };
        return response.status(201).json(message);
    }
};
