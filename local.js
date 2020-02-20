'use strict';

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

var assistant = new AssistantV2({
	version: '2020-02-05',
	authenticator: new IamAuthenticator({ apikey: "g81lGYM5V7wNDGH6d-h-KKRl4S5NFoaiLNNPh68WqKM4" }),
	serviceUrl: "https://api.us-south.assistant.watson.cloud.ibm.com/instances/d051e0ed-91a7-4f81-9ccb-1ab692ceb3b4/v2/assistants/5f14eb8e-f803-4189-981f-295fd920a566/sessions"
});
console.log(assistant);