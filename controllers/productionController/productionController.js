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

    async showByKeyword(req, res) {
        try {
            const { productionReference } = req.query;
            const specificProduction = await Production.find({
                $text: { $search: productionReference },
            });

            return res.status(200).send({ specificProduction });
        } catch (error) {
            const { message } = error;
            return res.status(400).send({ message });
        }
    },
};
