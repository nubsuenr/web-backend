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
const postpresident = (req,res) => {

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
const counselling = (req,res) => {
    res.render('counselling/index', {title:'Counselling'})
}
const viewcounselling = (req,res) => {
    res.render('counselling/viewmessage', {title:'Counselling Messages'})
}
const updatecounselling = (req,res) => {
    
}
const postannouncement = (req,res) => {

}
// end of counselling

// start of prayerhelp
const prayerhelp = (req,res) => {
    res.render('prayerhelp/index', {title:'Prayer Help'})
}
const viewcprayerhelp = (req,res) => {
    res.render('prayerhelp/viewmessage', {title:'Prayer Messages'})
}
const updateprayerhelp = (req,res) => {
    
}
// end of prayerhelp




module.exports = {
    dashboard,
    president,
    addpresident,
    updatepresident,
    postpresident,
    announcement,
    addannouncement,
    updateannoucement,
    deleteannoucement,
    postannouncement,
    counselling,
    viewcounselling,
    updatecounselling,
    prayerhelp,
    viewcprayerhelp,
    updateprayerhelp
  };