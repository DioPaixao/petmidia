const mongoose = require('mongoose')

const connection = process.env.MONGO_CONNECTION

const dbConfig = mongoose.connect(connection, () => {
	console.log('Mongo Connected')
})