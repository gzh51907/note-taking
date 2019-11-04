const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const { formatData, token } = require('../utils')


// 查询用户
// Router.get('/aaa', async (req, res) => {
//     let result = await mongo.find('user', { age: '18' })
//     res.send(result)
// })

//注册
Router.post('/reg', async (req, res) => {
    let { user_name, password } = req.body.params;
	// console.log(user_name,password)
	let date = new Date();
	let result=await mongo.update('user',{},{"user":{
            "user_name" : user_name,
            "password" : password,
			'regtime':date.toLocaleString()
    }});
	if (result.length) {
	    res.send(formatData({ code: 0 }))
	} else {
	    res.send(formatData());
	}
})
//验证名字重复
Router.get('/check', async (req, res) => {
    let { user_name } = req.query;
    // let result = await mongo.find('user', { username })
	let result = await mongo.aggregate('user',  [
		    {$match: {'user.user_name': user_name}},
		    {$project: {
		        user: {$filter: {
		            input: '$user',
		            as: 'user',
		            cond: {$eq: ['$$user.user_name', user_name]}
		        }},
		        _id: 0
		    }}
		]);
    if (result.length) {
        res.send(formatData({ code: 0 }))
    } else {
        res.send(formatData());
    }
})
//登录
Router.post('/login', async (req, res) => {
    let { user_name, password, mdl } = req.body.params;
	console.log(user_name,password)
	let result = await mongo.aggregate('user',  [
		    {$match: {'user.user_name': user_name,'user.password': password}},
		    {$project: {
		        user: {$filter: {
		            input: '$user',
		            as: 'user',
		            cond: {$eq: ['$$user.user_name', user_name]}
		        }},
		        _id: 0
		    }}
		]);
		// res.send(result[0].user)
		if(result.length!=0){
			if (result[0].user.length===1) {
			    let Authorization;
			    if (mdl) {
			        Authorization = token.create(user_name)
			    }
			    res.send(formatData({ data: Authorization }));
			} else {
			    res.send(formatData({ code: 0 }))
			}
		}else{
			res.send(formatData({ code: 0 }))
		}
})
//查询并返回用户信息
// Router.post('/finduser', async (req, res) => {
//     let {username} = req.body;
// 	console.log(username)
//     let result = await mongo.find('user', {username})
//     res.send(result)
// 	console.log(result.length)
// })
//修改用户的信息
// Router.post('/fixmsg', async (req, res) => {
//     let {username,obj} = req.body;
// 	// console.log(username,Object.keys(obj))
// 	// password=`$set{${password}}`
// 	let result=await mongo.update('user',{username},obj,true);
// 	if (result.length) {
// 	    res.send(formatData({ code: 0 }))
// 	} else {
// 	    res.send(formatData());
// 	}
// })
module.exports = Router;