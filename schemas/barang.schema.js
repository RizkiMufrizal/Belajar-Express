const Joi = require("joi");

module.exports = {
    simpanBarangSchema: () => {
        return Joi.object({
            NamaBarang: Joi.string().required()
        });
    },
    ambilBarangSchema: () => {
        return Joi.object({
            page: Joi.number().required(),
            pageSize: Joi.number().required()
        });
    }
};
