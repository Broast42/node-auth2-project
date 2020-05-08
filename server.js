const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()



server.use(express.json())
server.use(helmet())
server.use(cors())

//routes here


//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server