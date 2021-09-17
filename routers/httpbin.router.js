const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const httpbinServiceV1 = require(appRoot +
    "/services/v1/httpbin/httpbin.service");

router.get("/api/v1/httpbin", httpbinServiceV1.getUuid);

module.exports = {
    HttpBinRouter: router
};
