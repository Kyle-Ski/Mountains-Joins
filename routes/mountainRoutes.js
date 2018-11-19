const express = require('express')
const router = express.Router()
const controller = require('../controllers/mountainControllers')

router.get('/', controller.getAll)
router.get('/:rank', controller.getOne)
router.post('/', controller.postMountain)
router.put('/:id', controller.putMountain)
router.delete('/:id', controller.deleteMountain)

module.exports = router