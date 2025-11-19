const db = require('./db');

async function test() {
  try {
    const [rows] = await db.query('SELECT NOW() AS now');
    console.log('Conexão funcionando! Hora do servidor:', rows[0].now);
  } catch (err) {
    console.error('Erro ao conectar:', err);
  }
}

test();
