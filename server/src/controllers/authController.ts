import { RequestHandler, Request, Response } from 'express';
import User from '../model/users'
import bcrypt from 'bcrypt'
import createUserToken from '../utils/createUserToken'

export = {
    register: async (req:Request,res:Response)=>{
        try {  
            console.log('xxxxxxxxxxx',req.body)
            const {username,email,password} = req.body
            if(!username || !email || !password)  return res.status(401).json({msg:'all fields require'})          
            console.log("username",req.body.username);
            const foundUser = await User.findOne({ username });
            console.log(foundUser);
            if (foundUser) return res.status(403).json({ message: 'User already exist' });
            const newUser = new User({ username,email, password});
            await newUser.save();
            res.status(200).send(newUser);
        } catch (error) {
            res.status(400).json({err:error}) 
        }
    },
    login: async (req:Request,res:Response)=>{

        try {
            const{username,password} = req.body;
            if(!username || !password) return res.status(401).json({msg:'all fields required'})
            const founduser = await User.findOne({username}).select('+password');
            if(!founduser) return res.status(501).json({status:'fail',message: "user dosen't exist"})
            const validPassword = await bcrypt.compare(password,founduser.password);
            if(!validPassword) return res.status(501).json({status:'fail',message: "wrong password"});
            createUserToken(founduser, 200, req, res);
    
        } catch (error) {
            console.log(error)
             return res.status(400).json({message:'login block failed',error});
        }
    },


}
