const express = require('express');
const path = require('path');
const app = express();

const userRoutes = require('./routes/users');

const homeRoutes = require('./routes/home');

app.use(express.static(path.join(__dirname,'public')));

app.use(userRoutes);
app.use(homeRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);