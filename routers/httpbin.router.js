const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const { getUuid } = require(appRoot + "/services/v1/httpbin/httpbin.service");

router.get("/api/v1/httpbin", getUuid);

module.exports = {
    HttpBinRouter: router
};
