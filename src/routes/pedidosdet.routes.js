import { Router } from "express";
import {
    getPedidosdet,
    getpedidosdetxid,
    postPedidosdet,
    putPedidosdet,
    patchPedidosdet,
    deletePedidosdet
} from '../controladores/pedidosdetCtrl.js'
const router=Router()
//armar nuestras rutas

router.get('/pedidos_detalle',getPedidosdet)  //select
router.get('/pedidos_detalle/:id',getpedidosdetxid)  //select x id
router.post('/pedidos_detalle',postPedidosdet)  //insert
router.put('/pedidos_detalle/:id',putPedidosdet)  //update
router.patch('/pedidos_detalle/:id',patchPedidosdet)  //update
router.delete('/pedidos_detalle/:id',deletePedidosdet)  //delete

export default router