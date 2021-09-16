"use strict";

const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;
const appRoot = require("app-root-path");

const { sequelize } = require(appRoot + "/config/database");

const Barang = sequelize.define(
    "Barang",
    {
        idBarang: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "id_barang"
        },
        namaBarang: {
            allowNull: false,
            type: DataTypes.STRING(50),
            field: "nama_barang"
        }
    },
    { tableName: "tb_barang" }
);

module.exports = {
    Barang: Barang
};
