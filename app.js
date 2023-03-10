const express = require('express')
const app = express()
const ejs = require('ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/:name', (req, res) => {
  let { name } = req.params
  res.render('person.ejs', { name })
})

app.listen(3000, () => {
  console.log('server is running at 3000 port')
})
