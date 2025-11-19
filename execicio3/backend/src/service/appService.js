const db = require('../../db/conection/db');

const createUser = async (id, nome, email, senha, idade) => {
    try {
        const query = 'INSERT INTO user (name, email, password, idade) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(query, [id, nome, email, senha, idade]);
        return result.insertId;
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        throw err;
    }
};

const getAllUsers = async () => {
    try {
        const query = 'SELECT * FROM user';
        const [rows] = await db.query(query);
        return rows;
    } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        throw err;
    }
};

module.exports = {
    createUser,
    getAllUsers
};