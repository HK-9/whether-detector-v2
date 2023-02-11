"use strict";
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    gst: { type: Number, default: 18 },
    category: {
        type: String,
        required: true,
        ref: 'Category',
        enum: ["superhero", "tv&film", "cartoon&comic"]
    },
    subCategory: {
        type: String,
        required: true,
        ref: 'SubCategory',
        enum: ["painting", "abstract", "graphics"]
    },
    status: {
        type: String,
        default: 'pending'
    }
}, { timestamps: true });
const ProductModel = (0, mongoose_1.model)('Products', productSchema);
module.exports = ProductModel;
