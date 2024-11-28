const express = require('express');

const app = express();


const DATE_SERVER_POST = process.env.DATE_SERVER_POST || "http://localhost:3005"
app.get('/', (req, res) => {
    fetch(DATE_SERVER_POST)
        .then(res => res.json())
        .then(date => {
            res.send(`hello current ${new Date()}`)
        })
});


app.listen(3000, () => {
    console.log('ready')
})








