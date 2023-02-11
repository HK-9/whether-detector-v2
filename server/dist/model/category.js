"use strict";
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true }
}, { timestamps: true });
const CategoryModel = (0, mongoose_1.model)('category', categorySchema);
module.exports = CategoryModel;