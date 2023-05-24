const President = require("../models/presidents")
const Counselling = require("../models/counselling")
const Prayerhelp = require("../models/prayerhelp")
const Biblestudy = require("../models/biblestudy")
const Library = require("../models/library")
const Announcement = require("../models/announcement")
const Gallery =  require("../models/gallery")





const dashboard = (req,res) => {
    res.render("Dashboard", { title: "Dashboard" })
}
const president = async(req,res) => {
    President.find()
    .then((data) => {
        res.render('presidents/index', {title:"Presidents", presidents: data})
    })
    }
const presidents = async(req,res) => {
    President.find()
    .then((data) => {
        res.send(data)
    })
}    
const addpresident = async(req,res) => {
    res.render('presidents/addpresident', {title:"Add President"})
}
const updatepresident = async(req,res) => {
    President.findById(req.params.id)
        .then((data) => {
            res.render('presidents/updatepresident', {title:"Update President", president:data})
        })   
}
const upgradepresident =async(req,res) => {
    President.findByIdAndUpdate(req.params.id, req.body,{new:false})        
    .then((data) => {
        res.redirect("/presidents")
    })
       
}
const postpresident = async(req,res) => {
    if(!req.body){
        res.status(400).send({message:"President cannot be empty!"});
        return
    }
    const data = new President({
        name:req.body.name,
        yearofadministration:req.body.yearofadministration
    })

    await President.insertMany([data])
    res.redirect('/presidents')
}
// end of president routes

// start of announcements
const announcement = (req,res) => {
    Announcement.find()
    .then((data) => {
        res.render('announcements/index', {title:"Announcements", Announcement:data})
    })
    }
const addannouncement = (req,res) => {
    res.render('announcements/addannouncement', {title:"Add Announcement"})
}
const updateannoucement = (req,res) => {
    Announcement.findById(req.params.id)
        .then((data) => {
    res.render('announcements/updateannouncement', {title:"Update Annoucement", Announcement:data})
        })
}
const deleteannoucement = (req,res) => {
    Announcement.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/announcements")
    })
}
const postannouncement = async(req,res) => {
    const data = new Announcement({
        description:req.body.description,
        link:req.body.link
    })

    await Announcement.insertMany([data])
    res.redirect('/announcements')
}
// end of announcements

// start of counselling
const counselling = async(req,res) => {
    Counselling.find()
    .then((data) => {
        res.render('counselling/index', {title:'Counselling', counsellings:data})
    })
}
const postcounselling = async(req,res) => {
    if(!req.body){
        res.status(400).send({message:"Counselling cannot be empty!"});
        return
    }
    const data = new Counselling({
        fullname:fullname,
        worringmessage:worringmessage,
        viewed:req.body.viewed
    })

    await Counselling.insertMany([data])
    res.redirect('/counselling')
}
const viewcounselling = (req,res) => {
    Counselling.findById(req.params.id)
    .then((data) => {
        res.render('counselling/viewmessage', {title:'Counselling Messages', counselling:data})
    })
    
}
const updatecounselling = (req,res) => {
    Counselling.findByIdAndUpdate(req.params.id, req.body,{new:false})        
    .then(() => {
        res.redirect("/counselling")
    })
    
}

// end of counselling

// start of prayerhelp
const prayerhelp = (req,res) => {
    Prayerhelp.find()
    .then((data) => {
        res.render('prayerhelp/index', {title:'Prayer Help', prayerhelps:data})
    })
    
}
const viewprayerhelp = (req,res) => {
    Prayerhelp.findById(req.params.id)
    .then((data) => {
        res.render('prayerhelp/viewmessage', {title:'Prayer Messages',prayerhelp:data})
    })
   
}
const updateprayerhelp = (req,res) => {
    Prayerhelp.findByIdAndUpdate(req.params.id, req.body,{new:false})        
    .then(() => {
        res.redirect("/prayerhelp")
    })
}
const postprayerhelp = async(req,res) => {
    if(!req.body){
        res.status(400).send({message:"Prayer Request cannot be empty!"});
        return
    }
    const data = new Prayerhelp({
        name:req.body.name,
        message:req.body.message,
        viewed:req.body.viewed
    })

    await Prayerhelp.insertMany([data])
    res.redirect('/prayerhelp')
}
// end of prayerhelp


// start of biblestudies
const biblestudies = async(req,res) => {
    Biblestudy.find()
    .sort({ createdAt: -1 })
    .then((data) => {
        res.render('biblestudies/index', {title:'Bible Studies Content', biblestudys:data})
    })
    
}
const biblestudys = (req,res) => {
    Biblestudy.find()
    .sort({ createdAt: -1 })
    .then((data) => {
        res.send(data)
    })
    
}
const updatebiblestudies = (req,res) => {
    Biblestudy.findById(req.params.id)
    .then((data) => {
        res.render('biblestudies/updatebiblestudies', {title:'Update Bible Studies Content', biblestudy:data})
    })
    
}
const addbiblestudies = (req,res) => {
    res.render('biblestudies/addbiblestudies', {title:'Add Bible Studies Content'})
}
const postbiblestudies = async(req,res) => {
    if(!req.body){
        res.status(400).send({message:"Bible studies content cannot be empty!"});
        return
    }
    const data = new Biblestudy({
        title:req.body.title,
        snippet:req.body.snippet,
        date:req.body.date,
        link:req.body.link
    })

    await Biblestudy.insertMany([data])
    res.redirect('/biblestudies')

}
const upgradebiblestudies = (req,res) => {
    Biblestudy.findByIdAndUpdate(req.params.id, req.body,{new:false})        
    .then(() => {
        res.redirect("/biblestudies")
    })
}
const deletebiblestudies = (req,res) => {
    Biblestudy.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/biblestudies")
    })
}
// end of prayerhelp

// start of library
const librarybooks = (req,res) => {
    Library.find()
    .sort({ createdAt: -1 })
    .then((data) => {
        res.render('library/index', {title:'Library', Library:data})
    })
}
const library =(req,res) => {
    Library.find()
    .sort({ createdAt: -1 })
    .then((data) => {
        res.send(data)
    })
}
const addlibrarybook = (req,res) => {
    res.render('library/addlibrarybook', {title:'Add Library book Content'})
}
const postlibrarybook = async(req,res) => {
    
    const data = new Library({
        book_title:req.body.book_title,
        author_name:req.body.author_name,
        link:req.body.link
    })
    await Library.insertMany([data])
    res.redirect('/librarybooks')
}
const updatelibrarybook = (req,res) =>{
    Library.findById(req.params.id)
    .then((data) => {
        res.render('library/updatelibrary', {title:'Update Library Book Content', librarybook:data})
    })
}
const deletelibrarybook = (req,res) => {
    Library.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/librarybooks")
    })
}
const upgradelibrarybook = (req,res) => {
    Library.findByIdAndUpdate(req.params.id, req.body,{new:false})        
    .then(() => {
        res.redirect("/librarybooks")
    })
}
// end of library



// start of gallery
const gallery = (req,res) => {
    Gallery.find()
    .sort({ createdAt: -1 })
    .then((data) => {
        res.render('gallery/index',{title:"Gallery", Gallery:data})
    })
}
const gallerie = (req,res) => {
    Gallery.find()
    .sort({createdAt: -1})
    .then((data) => {
        res.send(data)
    })
}
const addgallery = (req,res) => {
    res.render('gallery/addgallery', {title:"Add Gallery"})
}
const deletegallery = (req,res) => {
    Gallery.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/gallery")
    })
}
const postgallery = async(req,res) => {
    const data = new Gallery({
        image_id:req.body.image_id
    })
    await Gallery.insertMany([data])
    res.redirect('/gallery')
}
//end of gallery

module.exports = {
    dashboard,
    president,
    presidents,
    addpresident,
    updatepresident,
    upgradepresident,
    postpresident,
    announcement,
    addannouncement,
    updateannoucement,
    deleteannoucement,
    postannouncement,
    counselling,
    postcounselling,
    viewcounselling,
    updatecounselling,
    prayerhelp,
    viewprayerhelp,
    updateprayerhelp,
    postprayerhelp,
    biblestudies,
    updatebiblestudies,
    addbiblestudies,
    postbiblestudies,
    upgradebiblestudies,
    deletebiblestudies,
    biblestudys,
    librarybooks,
    addlibrarybook,
    postlibrarybook,
    updatelibrarybook,
    library,
    deletelibrarybook,
    upgradelibrarybook,
    gallery,
    gallerie,
    addgallery,
    deletegallery,
    postgallery
  };