var cron = require("node-cron");
const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");

module.exports = () => {
    cron.schedule("* * * * *", () => {
        logger.info("running a task every minute");
    });
};
