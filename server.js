import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
import axios from "axios";


const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    console.log("k",req.query)
    const challange = req.query["hub.challenge"]
    const token = req.query["hub.verify_token"]
    // res.send("hello world")
    res.send(challange)
})
app.post('/chatbot', (req, res) => {
    // Get the chat message from the request body
    const message = req.body.message;
  
    // Process the message and generate a reply
    let reply;
    if (message === 'hi') {
        reply = 'Hello, how can I help you?';
    } else if (message === 'bye') {
        reply = 'Goodbye, have a nice day!';
    } else {
        reply = 'I am sorry, I do not understand what you mean.';
    }

    // Send the reply back to the user
    res.json({ reply });
});


const data = async()=>{
    try{
         const res = await axios.get("https://internshala.com/chat/c-40906496?filter=all")
        //  console.log(res)
    }catch(arr){
        console.log(arr)
    }
}

 data();
app.listen(PORT,()=>{
    console.log(`server running successfully on PORT : ${PORT}`)
})