const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");
const { cache, isExis } = require(appRoot + "/config/cache");

/* model */
const db = require(appRoot + "/config/database");
const Barang = db.barang;
/* model */

const { producer } = require(appRoot + "/config/kafka");

module.exports = {
    simpanBarang: async (request, response) => {
        // const barang = await Barang.create({
        //     namaBarang: request.body.NamaBarang
        // });

        const message = {
            Success: true,
            Message: {}
        };

        producer("api-txn-log-topic", [
            {
                value: JSON.stringify({
                    serviceName: "Simpan Barang",
                    steps: [
                        {
                            stepServiceName: "Validasi Request"
                        },
                        {
                            stepServiceName: "Simpan Data"
                        },
                        {
                            stepServiceName: "Kembalikan Response"
                        }
                    ]
                })
            }
        ]);

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
