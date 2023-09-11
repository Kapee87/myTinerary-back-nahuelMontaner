import createError from 'http-errors'


export function notFoundHandler(req, res, next) {
    next(createError(404, 'La ruta no existe'))
}

//ejemplo de manejo de error de la diapo

/* 
import Category from './../../models/Category.js'

let read = async (req,res,next) => {
    try{
        let all = await Category.find()

        //si todo sale bien
        return res.status(2xx).json({
            categories:all
        })

        //si algo sale mal
        return nex(createError(4xx, "Mensaje"))
    } catch(error){
        console.log(error)
        return enxt(error)
    }
}
 */