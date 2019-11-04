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
			icon,
			color,
			title_1,
			icon_1,
			color_1,
			price,
			text } = req.body.params;
	let date = new Date();
	let obj = {};
	let condition=`note.${node_id}.bill.${type}.list`
	let result=await mongo.update('nodebill',{"user" : user_name},
	{ [condition]:{
			'list_id':Date.now(),
            "title": title,
			"icon":icon,
			"color":color,
			"title_1":title_1,
			"icon_1":icon_1,
			"color_1":color_1,
			"price":price,
			"text":text,
			"year":date.getFullYear(),
			"month":date.getMonth()*1+1,
			"day":date.getDate(),
			"week":date.getDay(),
			// "month":10,
			// "day":1,
			// "week":5,
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
	let result=await mongo.aggregate('nodebill',[{$match: {'user': user_name}}]);
	res.send(result);
})
module.exports = Router;