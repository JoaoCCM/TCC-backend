const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    nature: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
    },
    finalYear: {
        type: Number,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model("Project", ProjectSchema);
