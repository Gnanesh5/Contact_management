const mongoose = require('mongoose');
mongoose.set("strictQuery", false)
// const connnectDB = async () => {
//     const connect = await mongoose
//         .connect(process.env.CONNECTION_STRING)
//         .then(() => {
//             console.log(`the connection is done to mongodb/contacts-backend`, connect.connection)
//            }).catch((error) => {
//             console.log(error)
//             process.exit91
//         })
// }

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connnected:", 
        connect.connection.host, 
        connect.connection.name);

    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}
    

module.exports = connectDB;