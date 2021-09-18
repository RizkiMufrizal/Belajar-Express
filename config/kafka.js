"use strict";

const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "belajar-express",
    brokers: ["localhost:9092"]
});

module.exports = {
    producer: async (topic, message) => {
        const producer = kafka.producer();

        await producer.connect();
        await producer.send({
            topic: topic,
            messages: message
        });

        await producer.disconnect();
    },
    consumer: (groupId) => {
        return kafka.consumer({ groupId: groupId });
    }
};
