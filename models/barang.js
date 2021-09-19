"use strict";

module.exports = (sequelize, Sequelize) => {
    const Barang = sequelize.define(
        "Barang",
        {
            idBarang: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "id_barang"
            },
            namaBarang: {
                allowNull: false,
                type: Sequelize.STRING(50),
                field: "nama_barang"
            }
        },
        { tableName: "tb_barang" }
    );

    return Barang;
};
