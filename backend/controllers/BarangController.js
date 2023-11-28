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

export const deleteBarang = async (req, res) => {
    const { kode_barang } = req.params;

    try {
        const existingBarang = await Barang.findByPk(kode_barang);

        if (!existingBarang) {
            return res.status(404).json({ message: 'Barang not found' });
        }

        await existingBarang.destroy();

        res.status(200).json({ message: 'Barang deleted successfully' });
    } catch (error) {
        console.error('Error deleting barang:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateBarang = async (req, res) => {
    const { kode_barang } = req.params;

    try {
        // Find the existing barang by its kode_barang
        const existingBarang = await Barang.findByPk(kode_barang);

        // If the barang doesn't exist, return a 404 response
        if (!existingBarang) {
            return res.status(404).json({ message: 'Barang not found' });
        }

        // Update the existing barang with the new data from req.body
        await existingBarang.update(req.body);

        // Return a success message
        res.status(200).json({ message: 'Barang updated successfully' });
    } catch (error) {
        // Handle errors, log them, and return an error response
        console.error('Error updating barang:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};