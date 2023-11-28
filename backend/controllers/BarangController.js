import Barang from "../models/BarangModel.js";
import bcrypt from 'bcrypt';

export const createBarang = async(req, res) => {
    try {
        // req.body.kode_barang = req.params.kode_barang;
        await Barang.create(req.body);
        res.status(201).json({
            message: "Barang created"
        });
    } catch(error) {
        console.log(error.message);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

export const getBarang = async(req, res) => {
    try {
        const response = await Barang.findAll()
        res.status(200).json(response);
    } catch(error) {
        console.log(error.message);
    }
}