const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require("./auth/auth-router")
const userRouter = require("./users/users-router")
const cookieParser = require("cookie-parser")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(cookieParser())

//routes here
server.use("/auth", authRouter)
server.use("/api/users", userRouter)

//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server