const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
})

const todoSchema = new Schema({
    username: String,
    todo: String,
    priority: String,
    timer: String
})

const User = mongoose.model('User', userSchema, "users")
const Todo = mongoose.model('Todo', todoSchema, "todos")


module.exports = {
    User,
    Todo
}
