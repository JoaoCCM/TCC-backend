const express = require("express");
const Student = require("../models/Student");

module.exports = {
    async create(req, res) {
        try {
            const user = await Student.create(req.body);

            return res.send({ user });
        } catch (err) {
            return res.status(400).send({ error: "Registration failed" });
        }
    },
};
