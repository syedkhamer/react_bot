
const express =require('express');
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.json())

require('./routes/dailogFlowroutes')(app)

const PORT=process.env.PORT||5000

app.listen(PORT);