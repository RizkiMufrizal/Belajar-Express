"use strict";

const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");

const middleware = () => {
    return (request, response, next) => {
        logger.info(request.body);
        logger.info(response.body);
        next();
    };
};

module.exports = middleware;
