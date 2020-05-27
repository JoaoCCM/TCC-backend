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

module.exports = mongoose.model("Production", ProductionSchema);
