"use strict";
const mongoose_1 = require("mongoose");
const SubCategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
}, { timestamps: true });
const SubCategoryModel = (0, mongoose_1.model)('subcategory', SubCategorySchema);
module.exports = SubCategoryModel;
