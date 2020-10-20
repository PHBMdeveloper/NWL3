import express from 'express'

const app = express()
app.use(express.json())


app.post('/users/:id', (request, response) =>{
    console.log('query', request.query)
    console.log('params', request.params)
    return response.json({message: 'OK'})
})

app.listen(3333)

