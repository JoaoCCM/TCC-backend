const express = require("express");
const ExamingBoard = require("../../models/ExamingBoard");

module.exports = {
    async create(req, res) {
        try {
            const newExamingBoard = await ExamingBoard.create(req.body);

            return res.send({ newExamingBoard });
        } catch (err) {
            return res.status(400).send({ error: "Registration failed" });
        }
    },
};
