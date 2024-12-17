const {log} = require('console')

const express = require('express')
const app = express()
const port = 3000

const posts = require('./posts')




log(posts)

app.get('/', (req,res) => {
  log(req)
  log(res)
  res.send('Server del mio blog')
})

app.listen(port, () => {
  log(`app in ascolto sulla porta ${port}`)
})