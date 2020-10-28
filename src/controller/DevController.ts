import { Request, Response } from 'express'
import { Dev } from '../models/Dev'
import api from '../services/api';
import parseStringAsArray from '../utils/parserStringAsArray'

class DevController {
    async store (req: Request, res: Response) {
        const { github_username, techs, latitude, longitude } = req.body

        const dev = await Dev.findOne({ github_username });

        if(dev) return res.status(400).send({ error: "Usuário já existe" })

        await api.get(`${github_username}`)
        .then(async(response) => {
            const { login: name, avatar_url, bio } = response.data
            
            const techsArray = parseStringAsArray(techs)

            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }

            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

            return res.json(dev)
        })
        .catch((err) => {
            return res.status(400).send({ error: "Error ao criar usuário" + err})
        })
        
    }

    async index (req: Request, res: Response) {
        const devs = await Dev.find();

        return res.json(devs)
    }
}

export default new DevController()