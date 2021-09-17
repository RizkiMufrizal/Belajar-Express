"use strict";

const Joi = require("joi");
const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");

const middleware = (schema, property) => {
    return (request, response, next) => {
        const { error } =
            property === "body"
                ? schema.validate(request.body)
                : schema.validate(request.query);

        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message).join(",");
            logger.error("error", message);

            response.status(422).json({
                error: message
            });
        }
    };
};

module.exports = middleware;
