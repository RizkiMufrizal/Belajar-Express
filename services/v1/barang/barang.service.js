const appRoot = require("app-root-path");
const { logger } = require(appRoot + "/config/logger");
const { Barang } = require(appRoot + "/models/barang");

module.exports = {
    simpanBarang: async (request, response) => {
        const barang = await Barang.create({
            namaBarang: request.body.NamaBarang
        });

        const message = {
            Success: true,
            Message: barang
        };

        return response.status(201).json({ nana: "rizki" });
    }
};
