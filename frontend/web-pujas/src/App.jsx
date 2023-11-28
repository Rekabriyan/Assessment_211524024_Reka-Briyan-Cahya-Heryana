import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Barang from "./pages/Barang";
import './App.css'

function App() {
  const [formData, setFormData] = useState({ nama_barang: '', satuan:'', harga_satuan:'', stok:'' });
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/barang', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data berhasil ditambahkan!');
                // Reset form setelah berhasil submit
                setFormData({ nama_barang: '', satuan:'', harga_satuan:'', stok:''});
            } else {
                console.error('Gagal menambahkan data.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/getbarang');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label>
                Nama Barang
                <input type="text" name="nama_barang" value={formData.nama_barang} onChange={handleChange} />
            </label>
            <br />
            <label>
                Satuan
                <input type="text" name="satuan" value={formData.satuan} onChange={handleChange} />
            </label>
            <br />
            <label>
                Harga Satuan
                <input type="text" name="harga_satuan" value={formData.harga_satuan} onChange={handleChange} />
            </label>
            <br />
            <label>
                Stok
                <input type="text" name="stok" value={formData.stok} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Tambah Data</button>
        </form>

        <h2>Data Barang</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Kode Barang</th>
                    <th>Nama Barang</th>
                    <th>Satuan</th>
                    <th>Harga Satuan</th>
                    <th>Stok</th>
                    {/* Tambahkan kolom lain sesuai kebutuhan */}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.kode_barang}>
                        <td>{item.kode_barang}</td>
                        <td>{item.nama_barang}</td>
                        <td>{item.satuan}</td>
                        <td>{item.harga_satuan}</td>
                        <td>{item.stok}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>  
    );
}

export default App
