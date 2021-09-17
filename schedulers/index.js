const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");

module.exports = () => {
    logger.info("Start All Scheduler");
    require("./every.minutes.scheduler")();
};
