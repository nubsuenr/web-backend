const express = require ('express');
const routescontroller = require('../services/routercontrollers')
const router = express.Router();

router.get('/', routescontroller.dashboard)
router.get('/presidents',routescontroller.president)
router.get('/presidentes',routescontroller.presidents)
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
router.get('/viewprayerhelp/:id',routescontroller.viewprayerhelp)
router.post('/updateprayerhelp/:id',routescontroller.updateprayerhelp)
router.post('/postprayerhelp',routescontroller.postprayerhelp)

router.get('/biblestudies',routescontroller.biblestudies)
router.get('/biblestudy',routescontroller.biblestudys)
router.get('/addbiblestudies',routescontroller.addbiblestudies)
router.get('/updatebiblestudies/:id',routescontroller.updatebiblestudies)
router.get('/deletebiblestudies/:id',routescontroller.deletebiblestudies)
router.post('/postbiblestudies', routescontroller.postbiblestudies)
router.post('/upgradebiblestudies/:id', routescontroller.upgradebiblestudies)

router.get('/librarybooks', routescontroller.librarybooks)
router.get('/library',routescontroller.library)
router.get('/addlibrarybook', routescontroller.addlibrarybook)
router.post('/postlibrarybook', routescontroller.postlibrarybook)
router.get('/updatelibrarybook/:id',routescontroller.updatelibrarybook)
router.get('/deletelibrarybook/:id',routescontroller.deletelibrarybook)
router.post('/upgradelibrarybook/:id', routescontroller.upgradelibrarybook)

router.get('/gallery', routescontroller.gallery)
router.get('/gallerie', routescontroller.gallerie)
router.get('/addgallery', routescontroller.addgallery)
router.get('/deletegallery/:id',routescontroller.deletegallery)
router.post('/postgallery', routescontroller.postgallery)

router.get('/test', (req,res) => {
    res.render("CreateBlog")
})

module.exports = router;