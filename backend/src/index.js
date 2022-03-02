const express = require('express')
const app = express()

require('dotenv').config()
require('./config/dbConfig')

app.get('/', (req,res) => {
	return res.json({
		message: 'Hello world'
	})
})

const port = 3000
app.listen(port, () => {
	console.log('Server created')
})