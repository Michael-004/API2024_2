import {conmysql} from '../db.js'
export const getClientes=
    async (req,res)=>{
        try {
            const [result] = await conmysql.query(' select * from clientes ')
            res.json(result)
        } catch (error) {
            return res.status(500).json({message:"Error al consultar clientes"})
        }
    }
    


export const getclientesxid=
async (req,res)=>{
    try {
        const[result]=await conmysql.query('select * from clientes where cli_id=?',[req.params.id])
        if (result.length<=0)return res.status(404).json({
            cli_id:0,
            message:"Cliente no encontrado"
        })
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message:'error de lado del servidor'})        
    }
}
export const postCliente=
async (req,res)=>{
    try {
    //console.log(req.body)
    const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}=req.body
    //console.log(cli_nombre) Se paracion la parte del cliente que queramos 
    const [rows]=await conmysql.query('insert into cliente(cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad) values(?,?,?,?,?,?,?)',
        [cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad])
        // const [rows]=await conmysql2.query('insert into tabla(cam1,cam2)values(?,?)', [cli_nombre, cli_correo]) Eso es un ejemplo una estructura que si deseas nomas querer
    res.send({
        id:rows.insertId
    })
    } catch(error){
            return res.status(500).json({message:'error del lado del servidor'})
    }
    
}
export const putCliente=(req,res)=>
    async (req,res)=>{
        try {
            const {id}=req.params
        const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}=req.body
        console.log(cli_nombre) 
        const [result]=await conmysql.query('update cliente set cli_identificacion=?, cli_nombre=?, cli_telefono=?, cli_correo=?, cli_direccion=?, cli_pais=?, cli_ciudad=? where id=?',
            [cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad, req.params.id])

            if(result.affectedRows<=0)return req.status(404).json({
                message:"Cliente no encnotrado"
            })  
            const [rows]=await conmysql.query('select * from clientes where cl_id=?', [id])
            res.json(rows[0])
        } catch(error){
                return res.status(500).json({message:'error del lado del servidor'})
        }
        
    }

export const patchCliente=
async (req,res)=>{
    try {
        const {id}=req.params
    //console.log(req.body)
    const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}=req.body
    console.log(cli_nombre) 
    const [result]=await conmysql.query('update cliente set cli_identificacion=IFNULL(?, cli_identificacion), cli_nombre=IFNULL(?, cli_nombre), cli_telefono=IFNULL(?, cli_telefono), cli_correo=IFNULL(?, cli_correo), cli_direccion=IFNULL(?, cli_direccion) cli_pais=(?, cli_pais) cli_ciudad=IFNULL(?, cli_ciudad) where id=?',
        [cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad, req.params.id])

        if(result.affectedRows<=0)return req.status(404).json({
            message:"Cliente no encnotrado"
        })  
        const [rows]=await conmysql.query('select * from clientes where cl_id=?', [id])
        res.json(rows[0])
    } catch(error){
            return res.status(500).json({message:'error del lado del servidor'})
    }
    
}

export const deleteCliente=
async(req,res)=>{
    try {
        const [rows]=
        await conmysql.query('delete from clientes where cli_id=?',[req.params.id])
        if (rows.affectedRows<=0)return res.status(404).json({
            id:0,
            message:'NO puedo eliminar al cliente'
        })
        res.sendStatus(202)
    } catch (error) {
        return res.status(500).json({
            message: "Error de lado del servidor"
        })
    }
}