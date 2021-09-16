"use strict";

const appRoot = require("app-root-path");
const axios = require("axios");

const { logger } = require(appRoot + "/config/logger");

module.exports = {
    getUuid: async (request, response) => {
        const responseAxios = await axios
            .get("https://httpbin.org/uuid")
            .then(function (response) {
                logger.info(response.data);
                return response.data;
            })
            .catch(function (error) {
                logger.error(error);
            });

        const message = {
            Success: true,
            Message: responseAxios
        };
        return response.status(200).json(message);
    }
};
