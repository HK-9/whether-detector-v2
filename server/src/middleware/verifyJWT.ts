import jwt  from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
const varifyJWT = (req:Request,res:Response,next:NextFunction)=>{
    const cookie = req.headers.cookie;
    if(!cookie) return res.status(403).json({message:'cookie missing'});
    const jwtToken = cookie.split("=")[1];
    if(!jwtToken) return res.status(401).json({message:'unauthorized'});
    jwt.verify(jwtToken,process.env.JWT_SECRET!,(err,decoded)=>{
        if(err){
            return res.status(403).json({message:'Forbiden-manupulated token'});
        }
        req.body.decoded = decoded
        next();
    })
}

export default varifyJWT;