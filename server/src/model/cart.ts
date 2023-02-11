import mongoose, { Schema,model,connect, Types } from "mongoose";

interface Cart {    
    userId:Types.ObjectId
    products: any,
  	grandTotal: Number
    timestamps? :Date;
  }

  
  const CartSchema = new Schema<Cart>({
    userId:{
          
        ref:'products'
    },
    products:[ //each products
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },
            quantity:{type:Number}, //product quantity
            subTotal: {type:Number}
        }
    ],
    grandTotal:{type:Number} 
    
  },{timestamps: true});

    const CartModel = model<Cart>('Cart', CartSchema);
    export = CartModel;