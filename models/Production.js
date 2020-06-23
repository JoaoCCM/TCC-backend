const mongoose = require("mongoose");

const ProductionSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    authors: {
        type: [String],
    },
    keyWords: {
        type: [String],
    },
});

ProductionSchema.index({
    title: "text",
    authors: "text",
    keyWords: "text",
});

module.exports = mongoose.model("Production", ProductionSchema);
