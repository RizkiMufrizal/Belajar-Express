const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");
const { flushAll } = require(appRoot + "/config/cache");

module.exports = {
    clearAllCache: (request, response) => {
        flushAll();
        logger.info("clear all cache success");
        const message = {
            Success: true,
            Message: "Success Clear All Cache"
        };
        return response.status(201).json(message);
    }
};
