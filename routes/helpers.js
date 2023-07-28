

import fetch from 'isomorphic-fetch';
import dotenv from 'dotenv';
dotenv.config();


export async function askGPT(messages, model = "gpt-3.5-turbo-0613", functions = [], temperature = 0.7) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
        'Content-Type': 'application/json'
    };
    let opts;
    if (functions.length) {
        opts = {
            model,
            messages,
            functions,
            temperature
        }
    } else {
        opts = {
            model,
            messages,
            temperature
        }
    }
    console.log("request body", opts);
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(opts)
    });
    const data = await response.json();
    console.log(JSON.stringify(data));
    return data;
}