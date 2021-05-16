const mongoose = require('mongoose');
require('dotenv/config');
const userDB=process.env.DB_CONNECTION;
mongoose.connect(userDB , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
.then((result)=>{
    console.log("Database is connected.");
})
.catch((err)=>{
    console.log("error" , JSON.stringify(err, undefined, 2));
})

module.exports = mongoose;