require("dotenv").config();
const express = require("express");
const appRoot = require("app-root-path");
const app = express();

/* load module */
require(appRoot + "/schedulers")();
/* load module */

/* config */
const { logger } = require(appRoot + "/config/logger");
const { sequelize } = require(appRoot + "/config/database");

/* middleware */
const requestResponseLogging = require(appRoot +
    "/middleware/request.response.logging");
/* middleware */

/* router */
const { BarangRouter } = require(appRoot + "/routers/barang.router");
const { CacheRouter } = require(appRoot + "/routers/cache.router");
const { HttpBinRouter } = require(appRoot + "/routers/httpbin.router");
const { HelloWorldRouter } = require(appRoot + "/routers/helloworld.router");
/* router */

/* application/json */
app.use(express.json());
/* application/x-www-form-urlencoded */
app.use(
    express.urlencoded({
        extended: true
    })
);

/* middleware */
app.use(requestResponseLogging());

/* router */
app.use(CacheRouter);
app.use(BarangRouter);
app.use(HttpBinRouter);
app.use(HelloWorldRouter);

module.exports = app;
