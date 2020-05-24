'use strict'
const dialogflow= require('dialogflow');
const config=require('../config/key');
//onst bodyParser = require('body-parser');
//const structjson=require('./structjson');
//const credentials=require('../dining-out-qodnto-a08f36e1f5e6')

const projectID= config.googleProjectID;
const credentials={
    client_emil:config.googleCilentEmail,
    private_key:config.googlePrivateKey
};

const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dailogFlowSessionID);
module.exports={
    textQuery:async function(text, parameters={}){
       let self =module.exports;
            const request = {
              session: sessionPath,
              queryInput: {
                  text: {
                      text: text,
                      languageCode: config.dailogFlowSessionLanguageCode
                  },
              },
            queryParams:  {
                    payload:{
                        data:parameters
                    }
              },

          };

          try{
            let resposes= await  sessionClient.detectIntent(request);
              respones= await self.handleAction(responses);
                          return resposes;}catch(error){
                console.log("eorro",error);
            }
          
         
    },
    eventQuery:async function(event, parameters={}){
        let self =module.exports;
             const request = {
               session: sessionPath,
               queryInput: {
                   text: {
                       name: event,
                       parameters:parameters,
                       languageCode: config.dailogFlowSessionLanguageCode
                   },
               },
             
           };
 
           try{
             let resposes= await  sessionClient.detectIntent(request);
               respones= await self.handleAction(responses);
                           return resposes;}catch(error){
                 console.log("eorro",error);
             }
           
          
     },
    handleAction :function(responses){
        return responses;
    }
}