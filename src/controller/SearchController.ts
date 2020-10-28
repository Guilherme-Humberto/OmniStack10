import { Request, Response } from 'express'
import { Dev } from '../models/Dev'
import parseStringAsArray from '../utils/parserStringAsArray'

class SearchController {
    async index (req: Request, res: Response) {
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: { 
                $in: techsArray 
            },
            location: { 
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        return res.send({ devs })
    }
}

export default new SearchController()