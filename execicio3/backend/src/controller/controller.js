const service = require('../service/appService');

const createUser = async (req, res) => {
    const { id, nome, email, senha, idade } = req.body;
    try {
        const userId = await service.createUser(id, nome, email, senha, idade);
        res.status(201).json({ id: userId, nome, email, idade });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await service.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
}

module.exports = {
    createUser,
    getAllUsers
};