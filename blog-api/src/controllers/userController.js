// src/controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = jwt.sign({ _id: user._id }, 'secret');
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }
        const token = jwt.sign({ _id: user._id }, 'secret');
        res.send({ user, token });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { register, login };
