import {  Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../model/users'


const signToken = (id:string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: 90000,
  });
};

const user = User;

// type userType = [{
//     _id: string;

// }]
const createUserToken:any = async (user:any, code:number, req:Request, res:Response) => {
    try {
    const token = signToken(user._id);
    user.password = undefined;
    // {sameSite: 'none', httpOnly: true, secure: true}
    res.cookie("jwt", token).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({message:'createUserTokenFailed',error})
  }
};

export default createUserToken;
