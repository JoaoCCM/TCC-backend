const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatar_url: {
        type: String,
    },
    // essa parte é pra dps que criar o model teacher
    // teacherList: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Teacher'
    // }]
});

StudentSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = mongoose.model("Student", StudentSchema);
