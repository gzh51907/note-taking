const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { formatData, token } = require('../utils')
 const multer = require("multer");
 //上传的文件保存在 upload
 const storage = multer.diskStorage({
     //存储的位置
     destination(req, file, cb){
         cb(null, 'upload/')
     },
     //文件名字的确定 multer默认帮我们取一个没有扩展名的文件名，因此需要我们自己定义
     filename(req, file, cb){
         cb(null, Date.now() + file.originalname)
     }
 })

 //传入storage 除了这个参数我们还可以传入dest等参数
 const upload = multer({storage})
 Router.post('/upimg', upload.single('file'), (req, res) =>{
    
    //给客户端返回图片的访问地址 域名 + 文件名字 
    //因为在 app.js文件里面我们已经向外暴漏了存储图片的文件夹 uploa
     const url = 'http://localhost:2020/' +'upload/'+ req.file.filename
	 console.log(url)
     res.json({url})
 })
module.exports = Router;