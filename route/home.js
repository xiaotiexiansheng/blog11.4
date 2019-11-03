const express = require('express');
const home = express.Router();
home.get('/',(req,res)=>{
    res.send('欢迎来到博客首页');
})
//将路由对象做为模板成员进行导出
module.exports = home;