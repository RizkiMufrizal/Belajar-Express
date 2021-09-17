const express = require("express");
const router = express.Router();
const appRoot = require("app-root-path");

const SchemaValidation = require(appRoot + "/middleware/schema.validation");
const { simpanBarangSchema, ambilBarangSchema } = require(appRoot +
    "/schemas/barang.schema");
const barangServiceV1 = require(appRoot + "/services/v1/barang/barang.service");

router.post(
    "/api/v1/barang",
    SchemaValidation(simpanBarangSchema(), "body"),
    barangServiceV1.simpanBarang
);
router.get(
    "/api/v1/barang",
    SchemaValidation(ambilBarangSchema(), "query"),
    barangServiceV1.ambilBarang
);

module.exports = {
    BarangRouter: router
};
