const express = require("express");
const Student = require("../models/Student");

module.exports = {
    async create(req, res) {
        try {
            const { email } = req.body;
            if (await Student.findOne({ email })) {
                return res.status(400).send("User already registered.");
            }

            const user = await Student.create(req.body);

            return res.send({ user });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Registration failed" });
        }
    },
};
