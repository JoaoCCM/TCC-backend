const express = require("express");
const Production = require("../../models/Production");

module.exports = {
    async create(req, res) {
        try {
            const newProduction = await Production.create(req.body);

            return res.send({ newProduction });
        } catch (err) {
            return res.status(400).send({ error: "Registration failed" });
        }
    },
};
