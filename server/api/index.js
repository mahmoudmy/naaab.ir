import { Router } from 'express'

import abyat from './abyat'

var router = Router()

// Add ABYAT Routes
router.use(abyat)

export default router
