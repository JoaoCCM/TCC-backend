const express = require("express");
const Guidence = require("../../models/Guidence");

module.exports = {
    async create(req, res) {
        try {
            const newGuidence = await Guidence.create(req.body);

            return res.send({ newGuidence });
        } catch (err) {
            return res.status(400).send({ error: "Registration failed" });
        }
    },
};
