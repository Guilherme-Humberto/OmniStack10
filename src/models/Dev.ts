import { Schema, model } from 'mongoose'
import { PointSchema } from './Utils/PointSchema'

const DevSchema = new Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: "2dsphere"
    }
})

const Dev = model("Dev", DevSchema)
export { Dev }