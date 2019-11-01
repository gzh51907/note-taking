const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { formatData, token } = require('../utils')


//添加账单
Router.post('/addbill', async (req, res) => {
    let { user_name,
			node_id,
			type,
			title,
			price,
			text } = req.body.params;
	let date = new Date();
	let obj = {};
	let condition=`note.${node_id}.bill.${type}.list`
	let result=await mongo.update('nodebill',{"user" : user_name},
	{ [condition]:{
			'list_id':Date.now(),
            "title" : title,
			"price":price,
			"text":text,
			"year":date.getFullYear(),
			"month ":date.getMonth(),
			"day":date.getDate(),
			"week":date.getDay(),
			// "month ":10,
			// "day":30,
			// "week":3,
			// 'regtime':date.toLocaleString()
    }});
	if (result.length) {
	    res.send(formatData({ code: 0 }))
	} else {
	    res.send(formatData());
	}
})
//获取某个人的账单信息
Router.post('/getbill', async (req, res) => {
    let { user_name } = req.body.params;
	console.log(user_name)
	let date = new Date();
	let result=await mongo.aggregate('nodebill',[{$match: {'user': 'xiaoxie'}}]);
	res.send(result);
})
module.exports = Router;