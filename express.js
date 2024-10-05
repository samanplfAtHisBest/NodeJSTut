const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

const todo_ = (type_ = "Walk ", when_="Now" ,  {name1_ = 'Peter', name2_ = "Person1"}) => {
    console.log (type_ + " - " +  when_ + " - "+ name1_ + " - " + name2_);
};
//todo_("tomorrow","peter2","a","b");

const todo2_ = (type_ = "Walk ", when_="Now" ,  name1_ = 'Peter', name2_ = "Person1") => {
    console.log (type_ + " - " +  when_ + " - "+ name1_ + " - " + name2_);
};
//todo2_("tomorrow","peter2","a","b");

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
    response.json().then((data) => {
    if (data.error) {
        console.log(data.error)
    } else {
        console.log(data)
        console.log("title: " + data.title)
}
})
})

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
    }

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

app.get('/hbs', (req, res) => {
    res.render('index', {
    title: 'Title via HBS',
    name: 'samanplfAtHisBest'
    })
})

app.get('', (req, res) => {
    res.send('You provided "' + req.query.address + '" as the address.');
    //res.send('<h1>Weather</h1>')
    })

app.get('/weather', (req, res) => {
    //res.send('Your weather')
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
        })
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