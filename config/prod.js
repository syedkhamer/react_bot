module.exports ={
    googleProjectID : process.env.GOOGLE_PROJECT_ID,
    dailogFlowSessionID: process.env.DAILOGFLOW_SESSION_ID,
    dailogFlowSessionLanguageCode: process.env.DAILOGFLOW_LANGUAGE_CODE,
    googleCilentEmail:process.env.GOOGLE_CLIENT_EMAIL,
    googlePrivateKey:JSON.parse(process.env.GOOGLE_PRIVATE_KEY)
}