const mongoose = require("mongoose");

const TeacherShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    academicFormation: {
        type: String,
    },
    researchField: {
        type: [String],
    },
    projects: {
        projects: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Project",
            },
        ],
    },
    productions: {
        productions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Production",
            },
        ],
    },
    examingBoard: {
        examingBoard: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ExamingBoard",
            },
        ],
    },
    guidence: {
        guidence: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Guidence",
            },
        ],
    },
});

module.exports = mongoose.model("Teacher", TeacherShema);
