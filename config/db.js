const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://jagadheesh2005:mongoatlas@cluster0.tjopw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const connection = mongoose.connection;
connection.on('connected', () => console.log("DB Connected"))
connection.on('error', () => console.log("DB Error"))

module.exports = mongoose