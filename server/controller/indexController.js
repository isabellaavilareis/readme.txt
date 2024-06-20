const { Module } = require("module");

const indexPage=(req,res)=>{
    res.render("index");

}

module.exports= {indexPage}
