const User = require ('../models/User');
const jwt = require('jsonwebtoken');



exports.registerUser = async (req, res) => {
    const { username, password } = req.body;


    try {
        const user = new User({ username, password });
        await user.save();


        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });


        res.status(201).json({ token });

    }   catch (error) {
        res.status(400).json({ message: 'Erro ao registrar usuários' });
    }
};


exports.loginUser = async (req, res) => {
    const { username, password } = req.body;



    try {
        
        const user = await User.findOne({ username });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Credencias inválidas'});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expires: '1d',
        });


        res.json({ token });

    }   catch (error) {
        res.status(400).json({ message: 'Erro ao realizar Login'});
    }
};