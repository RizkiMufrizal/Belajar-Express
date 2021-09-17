const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const helloWorldServiceV1 = require(appRoot +
    "/services/v1/hello-world/helloworld.service");

const helloWorldServiceV2 = require(appRoot +
    "/services/v2/hello-world/helloworld.service");

router.get("/api/v1/hello", helloWorldServiceV1.showHelloWorld);
router.get("/api/v2/hello", helloWorldServiceV2.showHelloWorld);

module.exports = {
    HelloWorldRouter: router
};
