const mongoose = require('mongoose')



const connectDB = async function connect(){
    await mongoose.connect(('mongodb://127.0.0.1:27017/mydb'))
    console.log('DB connected successfully')
}

module.exports = connectDB