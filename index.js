import { NlpManager } from "node-nlp";
const manager = new NlpManager({ languages: ['en'], forceNER: true });

console.log("Starting Chatbot ...");
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// this will take input from terminal
const rl = readline.createInterface({ input, output });

rl.setPrompt(">")
rl.prompt();


console.log("Chatbot started!");


// Nlpmanager class
manager.load();

