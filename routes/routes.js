const express = require ('express');
const routescontroller = require('../services/routercontrollers')
const router = express.Router();

router.get('/', routescontroller.dashboard)
router.get('/presidents',routescontroller.president)
router.get('/addpresident',routescontroller.addpresident)
router.get('/updatepresident',routescontroller.updatepresident)
router.post('/postpresident', routescontroller.postpresident)

router.get('/announcements',routescontroller.announcement)
router.get('/addannouncement',routescontroller.addannouncement)
router.get('/updateannouncement',routescontroller.updateannoucement)
router.get('/deleteannouncement',routescontroller.deleteannoucement)
router.post('/postannouncement', routescontroller.postannouncement)

router.get('/counselling',routescontroller.counselling)
router.get('/viewcounselling',routescontroller.viewcounselling)
router.post('/updatecounselling',routescontroller.updatecounselling)


router.get('/prayerhelp',routescontroller.prayerhelp)
router.get('/viewprayerhelp',routescontroller.viewcprayerhelp)
router.post('/updateprayerhelp',routescontroller.updateprayerhelp)

module.exports = router;