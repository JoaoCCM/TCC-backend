const authSecret = process.env.AUTH_SECRET;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Student = require("../models/Student");

module.exports = {
    async signin(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ error: "Missing information." });
        }

        const user = await Student.findOne({ email }).select("+password");

        if (user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send({
                        error:
                            "Something went wrong. Please, make sure your password is correct",
                    });
                }

                user.password = undefined;

                const payload = { id: user.id };

                const token = jwt.sign({ payload }, authSecret, {
                    expiresIn: 86400,
                });

                res.send({ user, token });
            });
        } else {
            res.status(400).send("User not found.");
        }
    },
};
