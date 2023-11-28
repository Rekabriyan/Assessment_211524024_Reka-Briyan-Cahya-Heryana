import express from "express";
import {createBarang, getBarang, updateBarang, deleteBarang} from "../controllers/BarangController.js";

const router = express.Router();

router.post('/barang', createBarang);
router.get('/getbarang', getBarang);
router.delete('/deletebarang/:kode_barang', deleteBarang) 
router.put('/barang/:kode_barang', updateBarang);

export default router;