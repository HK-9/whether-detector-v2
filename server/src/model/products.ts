import mongoose, { Schema,model,connect } from "mongoose";

interface Products {
  	name: string;
    image: string;
    description: string;
  	price?: number;
  	discount?:number;
  	gst?: number
    category: string;
    subCategory?: string;
    timestamps? :Date;
    status:string
  }

  
  const productSchema = new Schema<Products>({
    name: { type: String, required: true },
    image: { type: String},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    gst: { type: Number, default:18 },
    category: { 
      type: String, 
      required: true , 
      ref:'Category',
      enum: ["superhero", "tv&film", "cartoon&comic"]
    },
  subCategory: { 
    type: String, 
    required: true, 
    ref:'SubCategory',
    enum: ["painting", "abstract", "graphics"]
  },
  status:{
    type: String,
    default:'pending'
  }
  },{timestamps: true});

    const ProductModel = model<Products>('Products', productSchema);
    export = ProductModel;