var express = require('express');
var router = express.Router();
const { createToken } = require('../jwt')
const { User, Todo } = require('../mongo')



router.post('/user/todo', (req, res) => {
    const {username} = req.user;
    const {todo, priority, timer} = req.body;
    const toDo = new Todo({
        username,
        todo,
        priority,
        timer
    });
    toDo.save(err => {
        if (err) {
            console.log(err)
        } else {
            res.send('ok')
        }
    })
})

router.get('/user/item', (req, res) => {
    const { username } = req.user;
    console.log(username);
    Todo.find({
        username
    }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
    
}) 


router.get('/redirect', (req, res) => {
    if (req.user !== undefined) {
        res.send('/user')
    } else {
        res.send('/login')
    }
})

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    User.findOne({
        username,
        password
    }, (err, data) => {
        if (data) {
            res.send(createToken(username, password))
        } else {
            res.send("no user")
        }
    })
})

router.post('/sign', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const user = new User({
        username,
        password
    });
    user.save(err => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(createToken(username, password))
        }
    })
})

module.exports = router;
