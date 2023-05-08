const express = require ('express');
const routescontroller = require('../services/routercontrollers')
const router = express.Router();

router.get('/', routescontroller.dashboard)
router.get('/presidents',routescontroller.president)

module.exports = router;