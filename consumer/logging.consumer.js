const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");
const { consumer } = require(appRoot + "/config/kafka");

/* model */
const db = require(appRoot + "/config/database");
const ApiTxnLog = db.apiTxnLog;
const ApiStepLog = db.apiStepLog;
/* model */

module.exports = {
    apiTxnLog: async () => {
        const consumerKafka = consumer("api-txn-log-group");

        await consumerKafka.connect();
        await consumerKafka.subscribe({
            topic: "api-txn-log-topic",
            fromBeginning: true
        });

        await consumerKafka.run({
            eachMessage: async ({ topic, partition, message }) => {
                const messageKafka = JSON.parse(message.value.toString());

                const apiTxnLog = await ApiTxnLog.create({
                    serviceName: messageKafka.serviceName
                });

                messageKafka.steps.forEach(async (step) => {
                    const apiStepLog = await ApiStepLog.create({
                        stepServiceName: step.stepServiceName,
                        api_txn_log_id: apiTxnLog.id
                    });
                });
            }
        });
    }
};
