const President = require("../models/presidents")
const Counselling = require("../models/counselling")



const dashboard = (req,res) => {
    res.render("Dashboard", { title: "Dashboard" })
}
const president = async(req,res) => {
    President.find()
    .then((data) => {
        res.render('presidents/index', {title:"Presidents", presidents: data})
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
    res.render('announcements/index', {title:"Announcements"})
}
const addannouncement = (req,res) => {
    res.render('announcements/addannouncement', {title:"Add Announcement"})
}
const updateannoucement = (req,res) => {
    res.render('announcements/updateannouncement', {title:"Update Annoucement"})
}
const deleteannoucement = (req,res) => {
    
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
        res.status(400).send({message:"President cannot be empty!"});
        return
    }
    const data = new Counselling({
        fullname:req.body.fullname,
        worringmessage:req.body.worringmessage,
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
    .then((data) => {
        res.redirect("/counselling")
    })
    
}
const postannouncement = (req,res) => {

}
// end of counselling

// start of prayerhelp
const prayerhelp = (req,res) => {
    res.render('prayerhelp/index', {title:'Prayer Help'})
}
const viewprayerhelp = (req,res) => {
    res.render('prayerhelp/viewmessage', {title:'Prayer Messages'})
}
const updateprayerhelp = (req,res) => {
    
}
// end of prayerhelp


// start of biblestudies
const biblestudies = (req,res) => {
    res.render('biblestudies/index', {title:'Bible Studies Content'})
}
const updatebiblestudies = (req,res) => {
    res.render('biblestudies/updatebiblestudies', {title:'Update Bible Studies Content'})
}
const addbiblestudies = (req,res) => {
    res.render('biblestudies/addbiblestudies', {title:'Add Bible Studies Content'})
}
const postbiblestudies = (req,res) => {

}
const upgradebiblestudies = (req,res) => {

}
const deletebiblestudies = (req,res) => {

}
// end of prayerhelp




module.exports = {
    dashboard,
    president,
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
    biblestudies,
    updatebiblestudies,
    addbiblestudies,
    postbiblestudies,
    upgradebiblestudies,
    deletebiblestudies
  };