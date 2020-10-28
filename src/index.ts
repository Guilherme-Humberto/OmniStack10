import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import { router } from './routes/routes'
import 'dotenv/config'
import './database/connection'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
    }

    public middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(body_parser.json())
        this.express.use(body_parser.urlencoded({ extended: false }))
        this.express.use(router)
    }

}

export default new App()