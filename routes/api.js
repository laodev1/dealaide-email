
import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { askGPT } from './helpers.js'
dotenv.config();
var router = express.Router();



router.post('/ai/text', async (req, res) => {

    let from = req.body.from;
    let reply = req.body.draft;
    let subject = req.body.subject;
    let body = req.body.body;
    let type = req.body.type;
    let prompt;
    switch (true) {
        case type === "small":
            prompt = `Write a 2 word response to this email: "from: ${from} subject: ${subject}  body: ${body}"`
            break
        case type === "medium":
            prompt = `I am writing a professional email back to a colleague or client. Here is what they sent me "from: ${from} subject: ${subject}  body: ${body}"  and here is my draft reply (if blank I haven't written it yet): ${reply}. Please write a medium length reply that is warm and friendly.`
            break
        case type === "crispy":
            prompt = `I am writing a professional email back to a colleague or client. Here is what they sent me "from: ${from} subject: ${subject}  body: ${body}"  and here is my draft reply (if blank I haven't written it yet): ${reply}. Please write a long, eloquent, detailed over the top response.`
            break
        default:
            prompt = `I am writing a professional email back to a colleague or client.Here is what they sent me "from: ${from} subject: ${subject}  body: ${body}" and here is my draft reply (if blank not written yet. That's your job.): ${reply}. Please rework my response into a professional, warm, well-written email.`
    }
    console.time("OPENAI Reponse Time")
    let gptResponse = await askGPT([{ role: "user", content: prompt }], 'gpt-3.5-turbo-0613')
    res.status(200).send(gptResponse)
    console.timeEnd("OPENAI Reponse Time")

})
// Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
    },
});

// Route to send test email
router.get('/send-email', (req, res) => {
    const mailOptions = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }

        console.log('Email sent:', info.response);
        res.send('Email sent successfully!');
    })
})


export default router