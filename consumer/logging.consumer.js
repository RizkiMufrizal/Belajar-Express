const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");
const { consumer } = require(appRoot + "/config/kafka");

const consumerKafka = consumer({ groupId: "test-group" });

module.exports = async () => {
    const consumerKafka = consumer("test-group");

    await consumerKafka.connect();
    await consumerKafka.subscribe({ topic: "test-topic", fromBeginning: true });

    await consumerKafka.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(topic);

            console.log({
                message: "success",
                value: message.value.toString()
            });
        }
    });
};
