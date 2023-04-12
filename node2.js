const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000/'
}))

app.use(express.json())



app.post('/registration', (req, res) => {
    console.log(req.body);
    if (!req.body) {
        return sendStatus(400).json({ message: 'try again' })
    }
  
    return res.json(req.body)


})


app.get('/', (request, response) => {

    if (request.query.limit && request.query.limit !== '0') {
      inputs = inputs.slice(0, +request.query.limit)
    }
    response.statusMessage = 'okayy'
  
    response.status(201).json(inputs)
  })




app.listen(4200, (err) => {
    (err) ? console.log(err) : console.log('Listening port 4200');;
})