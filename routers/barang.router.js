const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const { simpanBarang } = require(appRoot +
    "/services/v1/barang/barang.service");

router.post("/v1/barang", simpanBarang);

module.exports = {
    BarangRouter: router
};
