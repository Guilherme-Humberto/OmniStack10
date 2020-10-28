import express from 'express'
const router = express.Router()
import devController from '../controller/DevController'
import searchController from '../controller/SearchController'

router.post("/dev", devController.store)
router.get("/list", devController.index)

router.get("/search", searchController.index)

export { router }