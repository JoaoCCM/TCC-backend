const express = require("express");
const Project = require("../../models/Project");

module.exports = {
    async create(req, res) {
        try {
            const newProject = await Project.create(req.body);

            return res.send({ newProject });
        } catch (err) {
            return res.status(400).send({ error: "Registration failed" });
        }
    },
};
