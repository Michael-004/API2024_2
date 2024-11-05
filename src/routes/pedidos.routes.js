import { Router } from "express";
import {getPedidos, 
    getpedidosxid, 
    postPedidos, 
    putPedidos, 
    patchPedidos, 
    deletePedidos 
} from '../controladores/pedidosCtrl.js'

const router= Router()
//armar nuestras rutas

router.get('/pedidos',getPedidos)//select 
router.get('/pedidos/:id', getpedidosxid)//select con id
router.post('/pedidos', postPedidos)//insert
router.put('/pedidos/:id',putPedidos) //update
router.patch('/pedidos/:id',patchPedidos)//modificar
router.delete('/pedidos/:id',deletePedidos)//delete

export default router