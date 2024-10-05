const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

const hbs = require('hbs')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')

const viewsPath = path.join(__dirname, '../node/views')
app.set('views', viewsPath)
const partialsPath = path.join(__dirname, './templates/partials')
hbs.registerPartials(partialsPath)

app.get('/partials', (req, res) => {
    res.render('partials', {
    })
})

app.get('/input', (req, res) => {
    res.render('forminput', {
    title: 'Form via HBS',
    name: 'bye samanplfAtHisBest'
    })
    console.log("deliverd");
})


app.get('*', (req, res) => {
    res.render('404', {
    title: '404',
    name: 'PS',
    errorMessage: 'Page not found.'
    })
    })


app.listen(3001, () => {
    console.log('Server is up on port 3001.')
})