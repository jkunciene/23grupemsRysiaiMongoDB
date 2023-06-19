const mongoose = require('mongoose');

const connectToDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to MongoDB ${conn.connection.host}`)
    } catch (error) {
        console.log(err)
    }
}

module.exports = connectToDb