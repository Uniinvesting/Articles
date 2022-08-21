const express = require("express");
const cohere = require('cohere-ai');
const puppeteer = require("puppeteer");
const app = express();
cohere.init('UN4toLPSBP9nsovrtmfO5M8u1X8nYDV3NdaWNgA5');

app.get("/", (req, res) => {
    console.log("Here");
    (async () => {
        res.send(await parseText());
    })()
});

app.listen(4000, () => {
    console.log("listening to port 4000");
})


async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    await browser.close()
}
async function parse() {
    const response = await cohere.generate({
        model: 'xlarge',
        prompt: 'Index funds are popular with investors because they promise ownership of a wide variety of stocks, greater diversification and lower risk – usually all at a low cost. That’s why many investors, especially beginners, find index funds to be superior investments to individual stocks.\n\nTLDR:',
        max_tokens: 10,
        temperature: 0.5,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ["--"],
        return_likelihoods: 'NONE'
      })
    return response.body.generations[0].text
}
async function parseText() {
    const wait = await parse()
    return wait
}