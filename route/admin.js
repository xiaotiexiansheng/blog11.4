const express = require('express');
const admin = express.Router();
admin.get('/login',(req,res)=>{
    res.render('admin/login');
})
admin.get('/user',(req,res)=>{
    res.render('admin/user');
})
//将路由对象做为模板成员进行导出
module.exports = admin;