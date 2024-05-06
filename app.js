const express = require('express');
const app = express();
const voiture= require('./routes/voiture')
app.use(express.json());
app.use('/car',voiture);

app.listen(8000,()=>{
    console.log('Server is running on port 8000...')
})