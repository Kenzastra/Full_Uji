import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Pengaduan = db.define('pengaduan',{
    id_pengaduan : {
        autoIncrement : true,
        type : DataTypes.INTEGER,
        primaryKey : true
    },
    tgl_pengaduan : {
        type : DataTypes.DATEONLY,
        defaultValue : DataTypes.NOW
    },
    nik : DataTypes.STRING,
    isi_laporan : DataTypes.STRING,
    foto : DataTypes.STRING,
    url : DataTypes.STRING,
    status : DataTypes.STRING
},{
    freezeTableName : true
});

export default Pengaduan;

(async()=>{
    await db.sync();
}) ();