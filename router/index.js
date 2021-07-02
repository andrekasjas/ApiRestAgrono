const { Router } = require('express');
const router = Router();

const {  getFactura, getProveedorFactura, getInsumoProveedor, createAdministrador, createFinca, createLote, createCultivo, createOperacion, createTrabajador, createTraxope, deleteFinca, updateFinca, getTrabajadores, getProveedores, getFincas, getLotes, getCultivos, getOperaciones, getEncargados, getInsumosOperacion, getFinca, getLote, getCultivo, getTrabajador, getProveedorr, createProducto, createFungicida, createFertilizante, createInsumo, createInsxope, createProveerdor, createFactura, createTipocultivo, deleteLote, deleteTipocultivo, deleteCultivo, deleteOperacion, deletetrabajador, deleteTraxope, deleteProducto, deleteFungicida, deleteFertilizante, deleteInsumo, deleteInsxope, deleteProveedor, deleteFactura, getTiposcultivo, getTipocultivo, getOperacion } = require('../controller/index.controller');

router.get('/trabajadores/:id', getTrabajadores);
router.get('/trabajador/:id', getTrabajador);
router.get('/proveedores', getProveedores);
router.get('/proveedorr/:id', getProveedorr);
router.get('/fincas/:id', getFincas);
router.get('/finca/:id', getFinca);
router.get('/lotes/:id', getLotes);
router.get('/lote/:id', getLote);
router.get('/tiposcultivo', getTiposcultivo);
router.get('/tipocultivo/:id', getTipocultivo);
router.get('/cultivos/:id', getCultivos);
router.get('/cultivo/:id', getCultivo);
router.get('/operaciones/:id', getOperaciones);
router.get('/operacion/:id', getOperacion);
router.get('/encargados/:id', getEncargados);
router.get('/insumoso/:id', getInsumosOperacion);
router.get('/insumosp/:id', getInsumoProveedor);
router.get('/factura/:id', getFactura);
router.get('/proveedor/:id', getProveedorFactura);

router.post('/administrador', createAdministrador);
router.post('/finca', createFinca);
router.post('/lote', createLote);
router.post('/tipocultivo', createTipocultivo);
router.post('/cultivo', createCultivo);
router.post('/operacion', createOperacion);
router.post('/trabajador', createTrabajador);
router.post('/traxope', createTraxope);
router.post('/producto', createProducto);
router.post('/fungicida', createFungicida);
router.post('/fertilizante', createFertilizante);
router.post('/insumo', createInsumo);
router.post('/insxope', createInsxope);
router.post('/proveedor', createProveerdor);
router.post('/factura', createFactura);

router.delete('/finca/:id', deleteFinca);
router.delete('/lote/:id', deleteLote);
router.delete('/tipocultivo/:id', deleteTipocultivo);
router.delete('/cultivo/:id', deleteCultivo);
router.delete('/operacion/:id', deleteOperacion);
router.delete('/trabajador/:id', deletetrabajador);
router.delete('/traxope/:id/:idc', deleteTraxope);
router.delete('/producto/:id', deleteProducto);
router.delete('/fungicida/:id', deleteFungicida);
router.delete('/fertilizante/:id', deleteFertilizante);
router.delete('/insumo/:id', deleteInsumo);
router.delete('/insxope/:id/:ido', deleteInsxope);
router.delete('/proveedor/:id', deleteProveedor);
router.delete('/factura/:id', deleteFactura);

router.put('/finca/:id', updateFinca)

module.exports = router;