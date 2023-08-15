import Tanggapan from "../models/TanggapanModel.js";
import path from "path";
import fs from "fs";

export const getTanggapan = async(req, res)=>{
    try {
        const response = await Tanggapan.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTanggapanById = async(req, res)=>{
    try {
        const response = await Tanggapan.findOne({
            where: {
                id_tanggapan: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveTanggapan = async(req, res)=>{
    if(req.body.isi === null) return res.status(400).json({msg: "Tidak Ada Tanggapan Yang Dibuat"})
    const isi = req.body.isi;
    const id_petugas = req.body.id_petugas;
    try {
        await Tanggapan.create({tanggapan : isi, id_petugas : id_petugas});
        res.status(201).json({msg:"Tanggapan Berhasil Dibuat"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTanggapan = async(req, res)=>{
    const tanggapan = await Tanggapan.findOne({
        where:{
            id_tanggapan: req.params.id
        }
    });
    if(!tanggapan) return res.status(404).json({msg: "Data Tidak Ditemukan"});
    const isi = req.body.isi;
    const id_petugas = req.body.id_petugas;
    try {
        await Tanggapan.update({tanggapan : isi, id_petugas : id_petugas},{
            where:{
                id_tanggapan: req.params.id
            }
        });
        res.status(200).json({msg:"Tanggapan Berhasil Diupdate"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTanggapan = async(req, res)=>{
    const tanggapan = await Tanggapan.findOne({
        where:{
            id_tanggapan: req.params.id
        }
    });
    if(!tanggapan) return res.status(404).json({msg: "Data Tidak Ditemukan"});
    try {
        await Tanggapan.destroy({
            where: {
                id_tanggapan: req.params.id
            }
        });
        res.status(200).json({msg: "Tanggapan Berhasil Dihapus"});
    } catch (error) {
        console.log(error.message);
    }
}