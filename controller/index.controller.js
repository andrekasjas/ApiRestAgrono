const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1923',
    database: 'tienda',
    port: '5432'
});

const getUsers = async(req, res) => {
    const response = await pool.query('SELECT * FROM clientes');
    res.status(200).json(response.rows);
}

const getUserById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM clientes WHERE clienteid = $1', [id]);
    res.status(200).json(response.rows);
}

const deleteUser = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM clientes WHERE clienteid = $1', [id]);
    res.status(200).json(`usurio ${id} eliminado ok`);
}

const updateUser = async(req, res) => {
    const id = req.params.id;
    const { cedula_ruc, nombrecia, nombrecontacto, direccioncli } = req.body;
    const response = await pool.query('UPDATE clientes set cedula_ruc = $1, nombrecontacto = $2, direccioncli = $3 WHERE clienteid = $4', [cedula_ruc, nombrecontacto, direccioncli, id])
    console.log(response);
    res.json('userio update');
}

const createUser = async(req, res) => {
    const { clienteid, cedula_ruc, nombrecia, nombrecontacto, direccioncli } = req.body;
    const response = await pool.query('INSERT INTO clientes (clienteid, cedula_ruc, nombrecontacto, direccioncli) VALUES ($1,$2,$3,$4)', [clienteid, cedula_ruc, nombrecontacto, direccioncli]);
    console.log(response);
    res.json({
        message: 'usario agragado ok',
        body: {
            user: { clienteid, cedula_ruc, nombrecia, nombrecontacto, direccioncli }
        }
    })
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}