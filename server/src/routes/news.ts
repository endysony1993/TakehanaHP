import { Router } from 'express'
import { getNews, listNews } from '../controllers/newsController'

const router = Router()

router.get('/', listNews)
router.get('/:slug', getNews)

export default router
