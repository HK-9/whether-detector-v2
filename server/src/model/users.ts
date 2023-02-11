import mongoose, { Schema,model,connect } from "mongoose";
import bcrypt from 'bcrypt';


interface User {
    username: string;
    email: string;
    password: string;
    role?: {
        type:string,
    };
    timestamps? :string;
  }

  
  const userSchema = new Schema<User>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    role:{ type: String, default:'user'}
  },{timestamps: true});

  
  userSchema.pre("save", async function (this:any,next:any) {
      this.password = await bcrypt.hash(this.password, 12);
      next();
    });
    


    const User = model<User>('User', userSchema);
    export = User;