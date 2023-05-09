const express = require ('express');
const routescontroller = require('../services/routercontrollers')
const router = express.Router();

router.get('/', routescontroller.dashboard)
router.get('/presidents',routescontroller.president)
router.get('/addpresident',routescontroller.addpresident)
router.get('/updatepresident/:id',routescontroller.updatepresident)
router.post('/postpresident', routescontroller.postpresident)
router.post('/upgradepresident/:id', routescontroller.upgradepresident)

router.get('/announcements',routescontroller.announcement)
router.get('/addannouncement',routescontroller.addannouncement)
router.get('/updateannouncement',routescontroller.updateannoucement)
router.get('/deleteannouncement',routescontroller.deleteannoucement)
router.post('/postannouncement', routescontroller.postannouncement)

router.get('/counselling',routescontroller.counselling)
router.get('/viewcounselling/:id',routescontroller.viewcounselling)
router.post('/updatecounselling/:id',routescontroller.updatecounselling)
router.post('/postcounselling',routescontroller.postcounselling)


router.get('/prayerhelp',routescontroller.prayerhelp)
router.get('/viewprayerhelp',routescontroller.viewprayerhelp)
router.post('/updateprayerhelp',routescontroller.updateprayerhelp)

router.get('/biblestudies',routescontroller.biblestudies)
router.get('/addbiblestudies',routescontroller.addbiblestudies)
router.get('/updatebiblestudies',routescontroller.updatebiblestudies)
router.get('/deletebiblestudies',routescontroller.deletebiblestudies)
router.post('/postbiblestudies', routescontroller.postbiblestudies)
router.get('/deletebiblestudies', routescontroller.deletebiblestudies)

router.get('/test', (req,res) => {
    res.render("CreateBlog")
})

module.exports = router;