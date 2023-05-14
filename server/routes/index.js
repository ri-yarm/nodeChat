import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('fuckout')
})

export default router
