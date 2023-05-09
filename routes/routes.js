const express = require ('express');
const routescontroller = require('../services/routercontrollers')
const router = express.Router();

router.get('/', routescontroller.dashboard)
router.get('/presidents',routescontroller.president)
router.get('/addpresident',routescontroller.addpresident)
router.get('/updatepresident',routescontroller.updatepresident)

router.get('/announcements',routescontroller.announcement)
router.get('/addannouncement',routescontroller.addannouncement)
router.get('/updateannouncement',routescontroller.updateannoucement)
router.get('/deleteannouncement',routescontroller.deleteannoucement)


module.exports = router;