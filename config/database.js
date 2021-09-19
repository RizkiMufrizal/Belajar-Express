const appRoot = require("app-root-path");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        logging: false,
        host: process.env.DB_HOSTNAME,
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.barang = require(appRoot + "/models/barang")(sequelize, Sequelize);
db.apiTxnLog = require(appRoot + "/models/api.txn.log")(sequelize, Sequelize);
db.apiStepLog = require(appRoot + "/models/api.step.log")(sequelize, Sequelize);

db.apiTxnLog.hasMany(db.apiStepLog, { as: "api_step_logs" });
db.apiStepLog.belongsTo(db.apiTxnLog, {
    as: "api_txn_log",
    foreignKey: "api_txn_log_id"
});

module.exports = db;
