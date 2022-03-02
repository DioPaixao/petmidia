const mongoose = require('mongoose')

const UserModelSchema = new mongoose.Schema({
	user_name: {
		type: String,
		required: true
	},
	user_email: {
		type: String,
		required: true
	},
	user_password: {
		type: String,
		required: true,
		select: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

const User = mongoose.model('User', UserModelSchema)

module.exports = User