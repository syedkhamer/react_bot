
const chatbot=require("../chatbot/chatbot.js");
module.exports=app =>{
    app.get('/', (req,res)=>{
        res.send({'hello':'syed'})
    })
    
    app.post('/api/df_text_query', async(req,res)=>{
    try{
   let responses= await chatbot.textQuery(res.body.text, req.body.parameters);

   res.send(responses[0].queryResult);}
   catch(error){
       console.log("error",error);
   }
         
       
          })
     
    app.post('/api/df_event_query',(req,res)=>{
        res.send({'do':'event query'})
     })
}