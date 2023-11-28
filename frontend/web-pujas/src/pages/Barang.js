import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useHistory, Link} from 'react-router-dom';
// import { BiEdit } from "react-icons/bi";
// import { BiTrash } from "react-icons/bi";
// import { BiSolidHelpCircle } from "react-icons/bi";
// import Swal from "sweetalert2";

const Barang = () => {
    const [nama_barang, setBarang] = useState([]);
    const [satuan, setSatuan] = useState([]);
    const [harga_satuan, setHargaSatuan] = useState([]);
    const [stok, setStok] = useState([]);

    const [msg, setMsg] = useState('');

}