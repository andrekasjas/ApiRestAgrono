const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controller/index.controller');

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', updateUser)

module.exports = router;