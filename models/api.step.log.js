"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, Sequelize) => {
    const ApiStepLog = sequelize.define(
        "ApiStepLog",
        {
            id: {
                type: Sequelize.STRING(36),
                primaryKey: true,
                field: "id"
            },
            stepServiceName: {
                allowNull: false,
                type: Sequelize.STRING(50),
                field: "step_service_name"
            }
        },
        { tableName: "tb_api_step_log", underscored: true }
    );

    ApiStepLog.beforeCreate(async (apiStepLog, options) => {
        apiStepLog.id = await uuidv4();
    });

    return ApiStepLog;
};
