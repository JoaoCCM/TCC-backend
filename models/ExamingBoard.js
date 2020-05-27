const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: [Number],
});

module.exports = mongoose.model("ExamingBoard", BoardSchema);
