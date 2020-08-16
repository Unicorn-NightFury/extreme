var express = require('express');
var router = express.Router();
const { createToken } = require('../jwt')
const User = require('../mongo')

router.get('/user', (req, res) => {
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
