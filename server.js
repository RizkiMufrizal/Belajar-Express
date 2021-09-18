const os = require("os");
const { logger } = require("./config/logger");
const app = require("./app");

const port = process.env.PORT || 8080;
app.listen(port, () => {
    logger.info(`app listening at http://${os.hostname()}:${port}`);
});
