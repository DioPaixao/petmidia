const User = require('../models/UserModel')

module.exports = {

	async read(req,res){
		const user = await User.find()
		return res.status(200).json(user)
	},

	async create(req,res){
		const { user_name, user_email, user_password } = req.body
		let data = {}
	}
}