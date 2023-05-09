const dashboard = (req,res) => {
    res.render("Dashboard", { title: "Dashboard" })
}
const president = (req,res) => {
    res.render('presidents/index', {title:"Presidents"})
}
const addpresident = (req,res) => {
    res.render('presidents/addpresident', {title:"Add President"})
}
const updatepresident = (req,res) => {
    res.render('presidents/updatepresident', {title:"Update President"})
}

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
module.exports = {
    dashboard,
    president,
    addpresident,
    updatepresident,
    announcement,
    addannouncement,
    updateannoucement,
    deleteannoucement
  };