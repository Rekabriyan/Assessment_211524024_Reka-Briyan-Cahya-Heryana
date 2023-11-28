import express from "express";
import cors from "cors";

// IMPORT ROUTES
import BarangRoute from "./routes/BarangRoute.js";

//IMPORT MODEL
import Barang from "./models/BarangModel.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(BarangRoute);

app.listen(5000, ()=> console.log('Server up and running...'));