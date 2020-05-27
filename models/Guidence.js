const mongoose = require("mongoose");

const GuidenceSchema = new mongoose.Schema({
    nature: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
    },
});

module.exports = mongoose.model("Guidence", GuidenceSchema);
