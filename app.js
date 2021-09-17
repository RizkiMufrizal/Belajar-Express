require("dotenv").config();
const express = require("express");
const os = require("os");
const app = express();

/* load module */
require("./schedulers")();
/* load module */

/* config */
const { logger } = require("./config/logger");
const { sequelize } = require("./config/database");

/* middleware */
const requestResponseLogging = require("./middleware/request.response.logging");
/* middleware */

/* router */
const { BarangRouter } = require("./routers/barang.router");
const { CacheRouter } = require("./routers/cache.router");
const { HttpBinRouter } = require("./routers/httpbin.router");
const { HelloWorldRouter } = require("./routers/helloworld.router");
/* router */

/* application/json */
app.use(express.json());
/* application/x-www-form-urlencoded */
app.use(
    express.urlencoded({
        extended: true
    })
);

sequelize
    .authenticate()
    .then(() => {
        logger.info("Connection Database has been established successfully.");
        sequelize.sync();
    })
    .catch((err) => {
        logger.error("Unable to connect to the database:", err);
    });

/* middleware */
app.use(requestResponseLogging());

/* router */
app.use(CacheRouter);
app.use(BarangRouter);
app.use(HttpBinRouter);
app.use(HelloWorldRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    logger.info(`app listening at http://${os.hostname()}:${port}`);
});
