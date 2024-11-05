import express from "express"
import clientesRoutes from './routes/clientes.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'
import pedidosdetRoutes from './routes/pedidosdet.routes.js'
import pedidosRoutes from './routes/pedidos.routes.js'
import authRoutes from './auth/auth.routes.js'
import { authenticateToken } from "./auth/auth.middleware.js"


const app=express();
app.use(express.json()); //para que interprete los objetos json
//rutas

//Nuestras rutas protegidas
app.use('/api/', authenticateToken, clientesRoutes)
app.use('/api', authenticateToken, usuariosRoutes)
app.use('/api',authenticateToken, productosRoutes)
app.use('/api', authenticateToken, pedidosdetRoutes)
app.use('/api', authenticateToken, pedidosRoutes)
app.use('/api/auth',authRoutes)


app.use((req, res, next)=>{
    res.status(400).json({
        message:'Pagina no encontrada'
    })
})
export default app;
