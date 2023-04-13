module.exports = {
  getIndex: (req, res) => {
    console.log("getindex");
    res.render("../views/index.ejs", {});
  },
};
