"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, Sequelize) => {
    const ApiTxnLog = sequelize.define(
        "ApiTxnLog",
        {
            id: {
                type: Sequelize.STRING(36),
                primaryKey: true,
                field: "id"
            },
            serviceName: {
                allowNull: false,
                type: Sequelize.STRING(50),
                field: "service_name"
            }
        },
        { tableName: "tb_api_txn_log", underscored: true }
    );

    ApiTxnLog.beforeCreate(async (apiTxnLog, options) => {
        apiTxnLog.id = await uuidv4();
    });

    return ApiTxnLog;
};
