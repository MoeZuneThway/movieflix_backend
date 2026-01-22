const mongoose = require('mongoose');
const dbPrefix = process.env.DB_PREFIX;
const dbUsername = encodeURIComponent(process.env.DB_USER);
const dbPassword = encodeURIComponent(process.env.DB_PW);;
const dbPostfix= process.env.DB_POSTFIX;
const dburi = `${dbPrefix}${dbUsername}:${dbPassword}${dbPostfix}`;
console.log(dburi);
const connectDB =async()=>{
    try{
        await mongoose.connect(dburi);
        console.log('Mongodb Connected');
    }catch(error){
        console.error("Mongodb connection failed",error.message );
        process.exit(1);
    }
}
module.exports = connectDB;