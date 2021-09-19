const appRoot = require("app-root-path");

const { consumer } = require(appRoot + "/config/kafka");
const { logger } = require(appRoot + "/config/logger");
const { apiTxnLog } = require("./logging.consumer");

module.exports = async () => {
    logger.info("Start Kafka JS");
    apiTxnLog();
};
