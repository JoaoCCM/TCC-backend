const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    // essa parte é pra dps que criar o model teacher
    // teacherList: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Teacher'
    // }]

});

module.exports = mongoose.model('Student', StudentSchema);