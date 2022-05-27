const { Pool } = require('pg');
const pool = new Pool({
    // host: 'localhost',
    // user: 'postgres',
    // password: '1923',
    // database: 'agricola',
    // port: '5432'
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const getTrabajadores = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM trabajador WHERE tra_adm_id = $1 ', [id]);
    res.status(200).json(response.rows);
}
const getTrabajador = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM trabajador WHERE tra_ced = $1 ', [id]);
    res.status(200).json(response.rows);
}
const getTiposcultivo = async(req, res) => {
    const response = await pool.query('SELECT * FROM tipocultivo');
    res.status(200).json(response.rows);
}
const getTipocultivo = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM tipocultivo WHERE tip_id = $1 ', [id]);
    res.status(200).json(response.rows);
}
const getProveedores = async(req, res) => {
    const response = await pool.query('SELECT * FROM proveedor');
    res.status(200).json(response.rows);
}
const getProveedorr = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM proveedor WHERE pro_ced = $1 ', [id]);
    res.status(200).json(response.rows);
}
const getFincas = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM finca WHERE fin_adm_id = $1 ', [id]);
    res.status(200).json(response.rows);
}
const getFinca = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM finca WHERE fin_id = $1 ', [id]);
    res.status(200).json(response.rows);
}
const getLotes = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM lote WHERE lot_fin_id = $1', [id]);
    res.status(200).json(response.rows);
}
const getLote = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM lote WHERE lot_id = $1', [id]);
    res.status(200).json(response.rows);
}
const getCultivos = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT c.*, tip_nom FROM cultivo as c, tipocultivo WHERE cul_lot_id = $1 and tip_id = cul_tip_id', [id]);
    res.status(200).json(response.rows);
}
const getCultivo = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT c.*, tip_nom FROM cultivo as c, tipocultivo WHERE cul_id = $1 and tip_id = cul_tip_id', [id]);
    res.status(200).json(response.rows);
}
const getOperaciones = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM operacion WHERE ope_cul_id = $1', [id]);
    res.status(200).json(response.rows);
}
const getOperacion = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM operacion WHERE ope_id = $1', [id]);
    res.status(200).json(response.rows);
}
const getEncargados = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT e.*, txo_val FROm operacion, trabajador as e, traxope WHERE ope_id = oxt_id and tra_ced = txo_ced and oxt_id = $1', [id]);
    res.status(200).json(response.rows);
}
const getInsumoProveedor = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('select i.* from insumo as i, proveedor, factura where ins_id = fac_ins_id and pro_ced = fac_pro_ced and fac_pro_ced = $1', [id]);
    res.status(200).json(response.rows);
}
const getInsumosOperacion = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT i.*, ixo_cant FROm operacion, insumo as i, insxope WHERE ope_id = oxi_id and ins_id = ixo_id and oxi_id = $1', [id]);
    res.status(200).json(response.rows);
}
const getFactura = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT f.* FROM factura as f, insumo WHERE ins_id = fac_ins_id and fac_ins_id = $1', [id]);
    res.status(200).json(response.rows);
}
const getProveedorFactura = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT p.* FROM proveedor as p, factura WHERE pro_ced = fac_pro_ced and fac_id = $1', [id]);
    res.status(200).json(response.rows);
}






const deleteFinca = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM finca WHERE fin_id = $1', [id]);
    res.status(200).json(`finca ${id} eliminado ok`);
}
const deleteLote = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM lote WHERE lot_id = $1', [id]);
    res.status(200).json(`lote ${id} eliminado ok`);
}
const deleteTipocultivo = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tipocultivo WHERE tip_id = $1', [id]);
    res.status(200).json(`tipo de cultivo ${id} eliminado ok`);
}
const deleteCultivo = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM cultivo WHERE cul_id = $1', [id]);
    res.status(200).json(`finca ${id} eliminado ok`);
}
const deleteOperacion = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM operacion WHERE ope_id = $1', [id]);
    res.status(200).json(`operacion ${id} eliminado ok`);
}
const deletetrabajador = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM trabajador WHERE tra_ced = $1', [id]);
    res.status(200).json(`trabajador ${id} eliminado ok`);
}
const deleteTraxope = async(req, res) => {
    const id = req.params.id;
    const idc = req.params.idc;
    const response = await pool.query('DELETE FROM traxope WHERE oxt_id = $1, txo_ced = $2', [id, idc]);
    res.status(200).json(`trabajador ${idc} que realizo la operacion ${id} eliminado ok`);
}
const deleteProducto = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM producto WHERE pro_id = $1', [id]);
    res.status(200).json(`producto ${id} eliminado ok`);
}
const deleteFungicida = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM fungicida WHERE id = $1', [id]);
    res.status(200).json(`fungicida ${id} eliminado ok`);
}
const deleteFertilizante = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM fertilizante WHERE id = $1', [id]);
    res.status(200).json(`fertilizante ${id} eliminado ok`);
}
const deleteInsumo = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM insumo WHERE ins_id = $1', [id]);
    res.status(200).json(`insumo ${id} eliminado ok`);
}
const deleteInsxope = async(req, res) => {
    const id = req.params.id;
    const ido = req.params.ido;
    const response = await pool.query('DELETE FROM insxope WHERE ixo_id = $1 AND oxi_id = $2', [id, ido]);
    res.status(200).json(`insumo ${id} de la operacion ${ido} eliminado ok`);
}
const deleteProveedor = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM proveedor WHERE pro_ced = $1', [id]);
    res.status(200).json(`proveedor ${id} eliminado ok`);
}
const deleteFactura = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM factura WHERE fac_id = $1', [id]);
    res.status(200).json(`factura ${id} eliminado ok`);
}





const updateFinca = async(req, res) => {
    const id = req.params.id;
    const { fin_nom, fin_are, fin_des } = req.body;
    const response = await pool.query('UPDATE finca set fin_nom = $1, fin_are = $2, fin_des = $3 WHERE fin_id = $4', [fin_nom, fin_are, fin_des, id])
    console.log(response);
    res.json('finca update');
}





const createAdministrador = async(req, res) => {
    const { adm_id, adm_ema } = req.body;
    const response = await pool.query('INSERT INTO administrador (adm_id, adm_ema) SELECT $1, $2 WHERE NOT EXISTS ( SELECT adm_id FROM administrador WHERE adm_id = $3 );', [adm_id, adm_ema, adm_id]);
    console.log(response);
    res.json({
        message: 'administrador agregado ok',
        body: {
            user: { adm_id, adm_ema }
        }
    })
}
const createFinca = async(req, res) => {
    const { fin_nom, fin_are, fin_des, fin_adm_id } = req.body;
    const response = await pool.query('INSERT INTO finca (fin_nom, fin_are, fin_des, fin_adm_id) VALUES ($1, $2, $3, $4)', [fin_nom, fin_are, fin_des, fin_adm_id]);
    console.log(response);
    res.json({
        message: 'finca agregado ok',
        body: {
            user: { fin_nom, fin_are, fin_des, fin_adm_id }
        }
    })
}
const createLote = async(req, res) => {
    const { lot_nom, lot_are, lot_des, lot_fin_id } = req.body;
    const response = await pool.query('INSERT INTO lote (lot_nom, lot_are, lot_des, lot_fin_id) VALUES ($1, $2, $3, $4)', [lot_nom, lot_are, lot_des, lot_fin_id]);
    console.log(response);
    res.json({
        message: 'lote agregado ok',
        body: {
            user: { lot_nom, lot_are, lot_des, lot_fin_id }
        }
    })
}
const createTipocultivo = async(req, res) => {
    const { tip_nom } = req.body;
    const response = await pool.query('INSERT INTO tipocultivo (tip_nom) VALUES ($1)', [tip_nom]);
    console.log(response);
    res.json({
        message: 'tipo de cultivo agregado ok',
        body: {
            user: { tip_nom }
        }
    })
}
const createCultivo = async(req, res) => {
    const { cul_nom, cul_ini, cul_fin, cul_cant, cul_lot_id, cul_tip_id } = req.body;
    const response = await pool.query('INSERT INTO cultivo (cul_nom, cul_ini, cul_fin, cul_cant, cul_lot_id, cul_tip_id) VALUES ($1, $2, $3, $4, $5, $6)', [cul_nom, cul_ini, cul_fin, cul_cant, cul_lot_id, cul_tip_id]);
    console.log(response);
    res.json({
        message: 'cultivo agregado ok',
        body: {
            user: { cul_nom, cul_ini, cul_fin, cul_cant, cul_lot_id, cul_tip_id }
        }
    })
}
const createOperacion = async(req, res) => {
    const { ope_nom, ope_tie, ope_fec, ope_fin, ope_cul_id } = req.body;
    const response = await pool.query('INSERT INTO operacion (ope_nom, ope_tie, ope_fec, ope_fin, ope_cul_id) VALUES ($1, $2, $3, $4, $5)', [ope_nom, ope_tie, ope_fec, ope_fin, ope_cul_id]);
    console.log(response);
    res.json({
        message: 'operacion agregado ok',
        body: {
            user: { ope_nom, ope_tie, ope_fec, ope_fin, ope_cul_id }
        }
    })
}
const createTrabajador = async(req, res) => {
    const { tra_ced, tra_nom, tra_tel, tra_adm_id } = req.body;
    const response = await pool.query('INSERT INTO trabajador (tra_ced, tra_nom, tra_tel, tra_adm_id) VALUES ($1, $2, $3, $4)', [tra_ced, tra_nom, tra_tel, tra_adm_id]);
    console.log(response);
    res.json({
        message: 'trabajador agregado ok',
        body: {
            user: { tra_ced, tra_nom, tra_tel, tra_adm_id }
        }
    })
}
const createTraxope = async(req, res) => {
    const { oxt_id, txo_ced, txo_val } = req.body;
    const response = await pool.query('INSERT INTO traxope (oxt_id, txo_ced, txo_val) VALUES ($1, $2, $3)', [oxt_id, txo_ced, txo_val]);
    console.log(response);
    res.json({
        message: 'encargado agregado ok',
        body: {
            user: { oxt_id, txo_ced, txo_val }
        }
    })
}
const createProducto = async(req, res) => {
    const { pro_nom, pro_pre } = req.body;
    const response = await pool.query('INSERT INTO producto (pro_nom, pro_pre) VALUES ($1, $2)', [pro_nom, pro_pre]);
    console.log(response);
    res.json({
        message: 'producto agregado ok',
        body: {
            user: { pro_nom, pro_pre }
        }
    })
}
const createFungicida = async(req, res) => {
    const { fun_niv, fun_pro_id } = req.body;
    const response = await pool.query('INSERT INTO fungicida (fun_niv, fun_pro_id) VALUES ($1, $2)', [fun_niv, fun_pro_id]);
    console.log(response);
    res.json({
        message: 'fungicida agregado ok',
        body: {
            user: { fun_niv, fun_pro_id }
        }
    })
}
const createFertilizante = async(req, res) => {
    const { fer_nut, fer_pro_id } = req.body;
    const response = await pool.query('INSERT INTO fertilizante (fer_nut, fer_pro_id) VALUES ($1, $2)', [fer_nut, fer_pro_id]);
    console.log(response);
    res.json({
        message: 'fetilizante agregado ok',
        body: {
            user: { fer_nut, fer_pro_id }
        }
    })
}
const createInsumo = async(req, res) => {
    const { ins_nom, ins_fecv, ins_pro_id } = req.body;
    const response = await pool.query('INSERT INTO insumo (ins_nom, ins_fecv, ins_pro_id) VALUES ($1, $2, $3)', [ins_nom, ins_fecv, ins_pro_id]);
    console.log(response);
    res.json({
        message: 'insumo agregado ok',
        body: {
            user: { ins_nom, ins_fecv, ins_pro_id }
        }
    })
}
const createInsxope = async(req, res) => {
    const { ixo_id, oxi_id, ixo_cant } = req.body;
    const response = await pool.query('INSERT INTO insxope (ixo_id, oxi_id, ixo_cant) VALUES ($1, $2, $3)', [ixo_id, oxi_id, ixo_cant]);
    console.log(response);
    res.json({
        message: 'insumo x operacion agregado ok',
        body: {
            user: { ixo_id, oxi_id, ixo_cant }
        }
    })
}
const createProveerdor = async(req, res) => {
    const { pro_ced, pro_nom, pro_raz, pro_ema } = req.body;
    const response = await pool.query('INSERT INTO proveedor (pro_ced, pro_nom, pro_raz, pro_ema) VALUES ($1, $2, $3, $4)', [pro_ced, pro_nom, pro_raz, pro_ema]);
    console.log(response);
    res.json({
        message: 'proveedor agregado ok',
        body: {
            user: { pro_ced, pro_nom, pro_raz, pro_ema }
        }
    })
}
const createFactura = async(req, res) => {
    const { fac_fec, fac_tip, fac_val, fac_cant, fac_ins_id, fac_pro_ced } = req.body;
    const response = await pool.query('INSERT INTO factura (fac_fec, fac_tip, fac_val, fac_cant, fac_ins_id, fac_pro_ced) VALUES ($1, $2, $3, $4, $5, $6)', [fac_fec, fac_tip, fac_val, fac_cant, fac_ins_id, fac_pro_ced]);
    console.log(response);
    res.json({
        message: 'factura agregado ok',
        body: {
            user: { fac_fec, fac_tip, fac_val, fac_cant, fac_ins_id, fac_pro_ced }
        }
    })
}

module.exports = {
    getFincas, getLotes, getCultivos, getOperaciones, getEncargados, getInsumosOperacion, 
    getFactura, getProveedorFactura, getTrabajadores, getProveedorFactura, getProveedores,
    getInsumoProveedor, getFinca, getLote, getCultivo, getTrabajador, getProveedorr,
    getTipocultivo, getTiposcultivo, getOperacion,
    createAdministrador, createFinca, createLote, createTipocultivo, createCultivo,
    createOperacion, createTrabajador, createTraxope, createProducto, createFungicida, 
    createFertilizante, createInsumo, createInsxope, createProveerdor, createFactura,
    deleteFinca, deleteLote, deleteTipocultivo, deleteCultivo, deleteOperacion, deletetrabajador,
    deleteTraxope, deleteProducto, deleteFungicida, deleteFertilizante, deleteInsumo, deleteInsxope,
    deleteProveedor, deleteFactura,
    updateFinca
}