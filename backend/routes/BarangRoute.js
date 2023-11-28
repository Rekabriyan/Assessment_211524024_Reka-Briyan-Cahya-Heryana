import express from "express";
import {createBarang, getBarang} from "../controllers/BarangController.js";

const router = express.Router();

router.post('/barang', createBarang);
router.get('/getbarang', getBarang);
// router.get('/barang/:id', getBarangById);
// router.put('/barang/:id', updateBarang);

export default router;