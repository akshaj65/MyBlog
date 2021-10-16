const app = require('./app');
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to uncaught exception");
    process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" })

//Connecting to the database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});




//unhandled Promise Rejection
//example:if we write mongodb wrongly in database connection this is called unhandled promise
process.on("unhandledRejection", err => {
    console.log(` Error :${err.message}`);
    console.log("shutting down the server due to unhandled promise rejection")
    server.close(() => {
        process.exit(1);
    })
})