const express = require('express');

const app = express();



app.get('/', (req, res) => {
    fetch("http://localhost:3005")
        .then(res => res.json())
        .then(date => {
            res.send(`hello current ${new Date()}`)
        })
});


app.listen(3000, () => {
    console.log('ready')
})








