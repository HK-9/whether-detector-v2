import mongoose, { Schema,model,connect,Types } from "mongoose";

interface Enquiry {
  	product: Types.ObjectId;
    status: string
  }
  
  const EnquirySchema = new Schema<Enquiry>({
    product: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref:'products' 
    },
    status:{
        type:String,
        default:'pending',
        required: true,
    }
  },{timestamps: true});

    const ProducEnquiryModel = model<Enquiry>('Enquiry', EnquirySchema);
    export = ProducEnquiryModel;