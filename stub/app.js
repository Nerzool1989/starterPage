const express = require('express')

const app = express()

//сюда енв нужен от сборки
const PORT = 5000

app.use('/api/auth', require('./routes/auth.routes')) //это динамический мидлвар
app.get('/api/test', function (req, res) {
  console.log('test')
  res.send('Hello test done')
})
app.get('/api/test/v2', function (req, res) {
  console.log('test')
  res.send('Hello test done')
})

app.listen(PORT, () => console.log(`запустился ${PORT} port`))
