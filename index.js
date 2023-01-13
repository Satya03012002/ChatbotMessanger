import { NlpManager } from "node-nlp";
const manager = new NlpManager({ languages: ['en'], forceNER: true });
import EventEmitter from "events";
const emitter = new EventEmitter();

console.log("Starting Chatbot ...");
import * as readline from 'node:readline/promises';
import {  stdin as input, stdout as output } from 'node:process';


// this will take input from terminal
const readlineInterface = readline.createInterface({ input, output });
console.log("Chatbot started!");
readlineInterface.setPrompt(">")
readlineInterface.prompt();
readlineInterface.on("line", async(line)=>{ // work after presising enter key
    try{
       
       const res = await manager.process("en",line);
       console.log(res.answer)
       readlineInterface.prompt()
    }catch(err){
        console.log(err)
    }
}).on("close", ()=>{
    process.exit(0)
})





// Nlpmanager class
manager.load();

