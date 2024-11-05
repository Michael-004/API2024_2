import { Router } from "express";
import {
    getProductos, 
    getproductosxid,
    postProducto,
    putProducto,
    patchProducto,
    deleteProducto
} from '../controladores/productosCtrl.js'
const router=Router()
//armar nuestras rutas

router.get('/productos',getProductos)  //select
router.get('/productos/:id',getproductosxid)  //select x id
router.post('/productos',postProducto)  //insert
router.put('/productos/:id',putProducto)  //update
router.patch('/productos/:id',patchProducto)  //update
router.delete('/productos/:id',deleteProducto)  //delete

export default router