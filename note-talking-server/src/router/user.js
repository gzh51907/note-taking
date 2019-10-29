const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { formatData, token } = require('../utils')


// 查询用户
Router.get('/aaa', async (req, res) => {
    let result = await mongo.find('user', { age: '18' })
    res.send(result)
})

//注册
Router.post('/reg', async (req, res) => {
    let { username, password } = req.body;
	let result=await mongo.create('user', [{ username, password, regtime: Date.now() }]);
	if (result.length) {
	    res.send(formatData({ code: 0 }))
	} else {
	    res.send(formatData());
	}
})
//验证名字重复
Router.get('/check', async (req, res) => {
    let { username } = req.query;
    let result = await mongo.find('user', { username })
    if (result.length) {
        res.send(formatData({ code: 0 }))
    } else {
        res.send(formatData());
    }
})
//登录
Router.post('/login', async (req, res) => {
    let { username, password, mdl } = req.body;
	console.log(username,password,mdl)
    let result = await mongo.find('user', { username, password })
    // res.send(result)
	console.log(result.length)
    if (result.length) {
        let Authorization;
        if (mdl) {
            Authorization = token.create(username)
            // Authorization = 789;
        }
        res.send(formatData({ data: Authorization }));
    } else {
        res.send(formatData({ code: 0 }))
    }
})
//查询并返回用户信息
Router.post('/finduser', async (req, res) => {
    let {username} = req.body;
	console.log(username)
    let result = await mongo.find('user', {username})
    res.send(result)
	console.log(result.length)
})
//修改用户的信息
Router.post('/fixmsg', async (req, res) => {
    let {username,obj} = req.body;
	// console.log(username,Object.keys(obj))
	// password=`$set{${password}}`
	let result=await mongo.update('user',{username},obj,true);
	if (result.length) {
	    res.send(formatData({ code: 0 }))
	} else {
	    res.send(formatData());
	}
})
module.exports = Router;