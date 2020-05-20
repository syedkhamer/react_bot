const dialogflow= require('dialogflow');
const config=require('../config/key')
const credentials=require('../dining-out-qodnto-d8c0e09eccb7.json')

const sessionClient = new dialogflow.SessionsClient({keyFilename:credentials})
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dailogFlowSessionID)
module.exports=app =>{
    app.get('/', (req,res)=>{
        res.send({'hello':'syed'})
    })
    
    
    app.post('/api/df_text_query', async(req,res)=>{
      const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body.text,
                languageCode: config.dailogFlowSessionLanguageCode
            }
        }
    };

          
        let resposes= await  sessionClient.detectIntent(request).catch((e) => { console.error(e.message) });
           
       res.send(resposes[0].queryResult);
    })
     
    app.post('/api/df_event_query',(req,res)=>{
        res.send({'do':'event query'})
     })
}