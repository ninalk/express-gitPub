const express = require('express')
const drinks = require('./models/drinks')
const food = require('./models/food')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.render('index.ejs', {
        allDrinks: drinks,
        allFood: food,
    })
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks,
    })
})

app.get('/drinks/:id', (req, res) => {
    // update image file from jpg to png
    // const imageURL = drinks[req.params.id].image
    // imageURL.replace('.jpg', '.png')
    // console.log(imageURL)

    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
    })
})

app.get('/food', (req, res) => {
    res.render('food_index.ejs', {
        allFood: food,
    })
})

app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id],
    })
})

app.listen(port, () => {
    console.log('listening...')
})