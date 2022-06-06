import "dotenv/config"
import express from 'express'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())

//endpoints


//msg
server.listen(process.env.PORT, () => console.log(`Api aberta na porta ${process.env.PORT}`))