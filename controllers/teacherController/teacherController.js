const express = require("express");
const Teacher = require("../../models/Teacher");

const Production = require("../../models/Production");
const ExamingBoard = require("../../models/ExamingBoard");
const Project = require("../../models/Project");
const Guidence = require("../../models/Guidence");

module.exports = {
    async create(req, res) {
        try {
            const {
                name,
                email,
                academicFormation,
                researchField,
                projects,
                productions,
                examingBoard,
                guidence,
            } = req.body;

            const teacher = await Teacher.create({
                name,
                email,
                academicFormation,
                researchField,
                projects,
                productions,
                examingBoard,
                guidence,
            });

            await Promise.all(
                projects.map(async (project) => {
                    const Teacher_project = new Project({
                        ...project,
                        teacher: teacher._id,
                    });

                    await Teacher_project.save();
                    teacher.projects.projects.push(Teacher_project);
                })
            );

            await Promise.all(
                productions.map(async (production) => {
                    const Teacher_productions = new Production({
                        ...production,
                        teacher: teacher._id,
                    });

                    await Teacher_productions.save();
                    teacher.productions.productions.push(Teacher_productions);
                })
            );

            await Promise.all(
                examingBoard.map(async (examingBoard) => {
                    const Teacher_examingBoard = new ExamingBoard({
                        ...examingBoard,
                        teacher: teacher._id,
                    });

                    await Teacher_examingBoard.save();
                    teacher.examingBoard.examingBoard.push(
                        Teacher_examingBoard
                    );
                })
            );

            await Promise.all(
                guidence.map(async (guidence) => {
                    const Teacher_guidence = new Guidence({
                        ...guidence,
                        teacher: teacher._id,
                    });

                    await Teacher_guidence.save();
                    teacher.guidence.guidence.push(Teacher_guidence);
                })
            );

            teacher.save();

            return res.send({ teacher });
        } catch (err) {
            console.error(err);
            return res.status(400).send({ error: "Registration failed" });
        }
    },
};
