import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Barang = db.define('barang', {
    kode_barang:{
        type: DataTypes.STRING(32),
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal(`'BRG_211524024_' || lpad(nextval('kode_barang'::regclass)::text, 2, '0')`)
    },
    nama_barang: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    satuan: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    harga_satuan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true
});



export default Barang;

(async() => {
    await db.sync();
})();