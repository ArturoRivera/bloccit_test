module.exports = {
  index(req, res, next){
    res.render("static/index", {title: "Welcome to Bloccit"});
  },
  about(req, res, next) {
    res.render("static/partials/about", {title: "About Us"});
  }
}
