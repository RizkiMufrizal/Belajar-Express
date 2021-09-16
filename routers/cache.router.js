const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const { clearAllCache } = require(appRoot + "/services/v1/cache/cache.service");

router.get("/api/v1/cache/clearall", clearAllCache);

module.exports = {
    CacheRouter: router
};
