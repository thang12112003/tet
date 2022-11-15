const express = require('express')
const expressHandlebars = require('express-handlebars')

const fortune = require('./lib/fortune.js')

const tets = require('./lib/tets.js')
const catNames = require('cat-names')


const christmass = require('./lib/christmass.js')
const path = require('path');
const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/tet', (req, res) => {
  res.render('tet', { tets: tets.gettetFortune() })
})

app.use("/img", express.static(path.join(__dirname, "/public/img")));


app.get('/christmas', (req, res) => {
  res.render('christmas', { christmass: christmass.getchristmasFortune() })
})

app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
})


// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

app.listen(port, () => {
  console.log( `Express started on http://localhost:${port}` +
    '; press Ctrl-C to terminate.' )
})