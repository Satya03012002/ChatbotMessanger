// https://medium.com/geekculture/create-chatbot-with-nodejs-cf3d8bc3f302

import { NlpManager } from "node-nlp";
import fs from "fs"

const manager = new NlpManager({ languages: ['en'], forceNER: true });
const files = fs.readdirSync("./intent");
for (const file of files) {
   
    let data = fs.readFileSync(`./intent/${file}`);
    data = JSON.parse(data);
    const intent = file.replace(".json", "");
    console.log(data)
    console.log(intent)
   
    for (let i of data){
        for (const question of i.questions) {
            manager.addDocument("en", question, intent);
        }
        for (const answer of i.answers) {
            manager.addAnswer("en", intent, answer);
        }
    }
    
    
}

const train_save = async()=>{
    try{
        await manager.train();
        manager.save()
    }catch(err){
        console.log(err)
    }
}

train_save()