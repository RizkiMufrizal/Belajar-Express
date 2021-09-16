const appRoot = require("app-root-path");
const { logger } = require(appRoot + "/config/logger");
const barangModel = require(appRoot + "/models/barang");

module.exports = {
    simpanBarang: async (request, response) => {
        // const barang = await barangModel.create({
        //     namaBarang: request.NamaBarang
        // });

        // const message = {
        //     Success: true,
        //     Message: barang
        // };

        return response.status(201).json(request);
    }
};
