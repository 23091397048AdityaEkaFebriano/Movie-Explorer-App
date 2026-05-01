const fs = require('fs');
const path = require('path');
const db = require('./config/db');

const migrate = async () => {
  try {
    console.log('🚀 Memulai migrasi database...');
    
    // Baca file schema.sql
    const sqlPath = path.join(__dirname, 'schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Jalankan query
    await db.query(sql);
    
    console.log('✅ Migrasi berhasil! Tabel telah dibuat dan data dummy telah dimasukkan.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migrasi gagal:', error.message);
    process.exit(1);
  }
};

migrate();
