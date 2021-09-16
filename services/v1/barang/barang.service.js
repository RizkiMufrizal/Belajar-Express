const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");
const { cache, isExis } = require(appRoot + "/config/cache");
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

        return response.status(201).json(message);
    },
    ambilBarang: async (request, response) => {
        let barangs;
        if (isExis("barang")) {
            barangs = cache.get("barang");
            logger.info("cache is exist");
        } else {
            barangs = await Barang.findAll();
            cache.set("barang", barangs);
            logger.info("cache not exist");
        }

        const message = {
            Success: true,
            Message: barangs
        };

        return response.status(200).json(message);
    }
};
