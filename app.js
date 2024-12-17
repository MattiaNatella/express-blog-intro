const {log} = require('console')

const express = require('express')
const app = express()
const port = 3000

const posts = require('./posts')

app.use(express.static('public'));


app.get('/', (req,res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req,res) => {

  const bacheca ={
    posts: posts,
    numeroPost: posts.length
  }
  
  res.json(bacheca)
  log(bacheca)
 
  })

  // const bacheca = [{...posts}, {posts.length}]
  // res.json(bacheca)
  // log(bacheca)
  

app.get('/img', (req,res) => {
  res.send('<img src="public/ciambellone.jpeg">') //test pubblicazione assets statici
})

app.listen(port, () => {
  log(`app in ascolto sulla porta ${port}`)
})