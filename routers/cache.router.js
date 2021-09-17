const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const cacheServiceV1 = require(appRoot + "/services/v1/cache/cache.service");

router.get("/api/v1/cache/clearall", cacheServiceV1.clearAllCache);

module.exports = {
    CacheRouter: router
};
