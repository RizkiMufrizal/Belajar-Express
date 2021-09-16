const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const { simpanBarang, ambilBarang } = require(appRoot +
    "/services/v1/barang/barang.service");

router.post("/api/v1/barang", simpanBarang);
router.get("/api/v1/barang", ambilBarang);

module.exports = {
    BarangRouter: router
};
