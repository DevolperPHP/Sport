const mongoose = require('mongoose');
const MONGO_URI = "mongodb://localhost:27017/Sports"

mongoose.connect(MONGO_URI, (error) => {
    if(error){
        console.error(error)
    } else {
        console.log("Database connected")
    }
})

module.exports = mongoose