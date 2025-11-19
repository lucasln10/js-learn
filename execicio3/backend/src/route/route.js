const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is running');
});

router.get('/users', controller.getAllUsers);
router.post('/users', controller.createUser);

module.exports = router;