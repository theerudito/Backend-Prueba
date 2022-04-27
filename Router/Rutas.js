const express = require('express')
const { GetAllRegister, GetOneRegistre, CreateRegistre, EditRegistre, DeleteRegistre } = require('../Controllers/ClienteControllers')
const router = express.Router()

router.get('/', GetAllRegister)
router.get('/:id', GetOneRegistre)
router.post('/', CreateRegistre)
router.put('/:id', EditRegistre)
router.delete('/:id', DeleteRegistre)


module.exports = router
