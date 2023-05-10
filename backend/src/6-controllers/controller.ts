import express, {Request, Response, NextFunction} from "express";
import logic from "../5-logic/logic"

const router = express.Router()

router.get("/______", async(request:Request,response:Response,next:NextFunction)=>{
    try {

    }
    catch(err:any) {
        next(err)
    }
})

router.post("/______", async(request:Request,response:Response,next:NextFunction)=>{
    try {

    }
    catch(err:any) {
        next(err)
    }
})


export default router