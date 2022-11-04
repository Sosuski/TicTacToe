// То се слага локално на всеки проект
// На всеки проект теглиш някакви библиотеки. Те се запазват в node_modules
// с npm - node packet manager може да теглиш пакети на node.js
// npm install <library>
// package.json е файл, който съдържа версиите на библиотеките ти

const express = require('express');
const server = express();
const cors = require('cors');
const userSchema = require('./schema.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TicTacToe');

server.use(express.json());

// server.use изпълнява middleware на всеки request
server.use(cors({
    origin: 'http://127.0.0.1:5500' 
}));



// express в случая е функция, която слагам в друга променлива

// Ся ще си направим едно API с някакъв endpoint, който изпълнява някакъв middleware

// HTTP request-а е POST, endpoint-а е /register, middleware-а е функцията на втори параметър
server.post('/register', async (req, res) => {
    //console.log(req.body);
    const user = new userSchema();

    user.username = req.body.user;
    user.password = req.body.pass;

    await user.save();

    res.json({
        message: 'success',
        code: 200
    })
});

server.post('/login', async (req, res) => {  
    //console.log(req.body);  
    const query = await userSchema.findOne({ username: req.body.user });
    if(query!=null && query.password == req.body.pass){
        res.json({
            message: 'successfully logged in',
            code: 201
        }) 
    } else res.json({
        message: 'Failed to log in',
        code: 202
    })
});
// Тук библиотеките връщат обект, който запазваме под формата на променлива, че да интерактираме с тях

server.listen(8000, () => {
    console.log('Server is on');
})

// пуснах си сървъра с node => node <file>