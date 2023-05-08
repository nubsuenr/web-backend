const dashboard = (req,res) => {
    res.render("Dashboard", { title: "Dashboard" })
}
const president = (req,res) => {
    res.render('presidents/index', {title:"Presidents"})
}

module.exports = {
    dashboard,
    president
  };