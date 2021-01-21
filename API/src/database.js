const mongoose = require('mongoose');

mongoose.connect(process.env.URLDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
})
.then(db => console.log('Connection estabislished with MongoDB'))
.catch(err => console.log('error'));