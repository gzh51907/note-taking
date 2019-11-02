import React from 'react';
import { Button } from 'antd';
import Api from '../api/index';
import qs from 'qs';
import axios from 'axios'

class Test extends React.Component {
	//登录
	async gologin(){
		let user_name = 'xiaoxie6' ;
		let password ='123456'
		let mdl =true
		let datas=await Api.post('/user/login',{
			user_name:user_name,
			password:password,
			mdl:mdl
		})
		console.log(datas)
	}
	//注册
	async gores(){
		let user_name = 'xiaoxie' ;
		let password ='123456'
		let mdl =true
		let datas=await Api.post('/user/reg',{
			user_name:user_name,
			password:password,
		})
		console.log(datas)
	}
	//同名校验
	async gocheck(){
		let user_name = 'xiaoxie';
		let datas=await Api.get('/user/check',{
			user_name:user_name
		})
		console.log(datas)
	}
	//提交账单
	async addbill(){
		// 用户名
		let user_name = 'xiaoxie';
		//账本编号
		let node_id='note_id_1'
		//账本名
		// let note_name='默认账本'
		//收入或者支出
		let type='outcome'
		//消费类型
		let title='赌博'
		//价钱
		let price='300'
		//备注
		let text='珍惜生命，远离赌博'
		let datas=await Api.post('/bill/addbill',{
			user_name,
			node_id,
			type,
			title,
			price,
			text
		})
		console.log(datas)
	}
	
	//获取某个用户的全部账本
	async getbill(){
		// 用户名
		let user_name = 'xiaoxie';
		let datas=await Api.post('/bill/getbill',{
			user_name
		})
		console.log(datas)
	}
	
	
	
	
	
    render() {
        return (
            <div>
				 <Button type="primary" onClick={()=>{this.gologin()}}>登录</Button>
				 <Button type="primary" onClick={()=>{this.gores()}}>注册</Button>
				 <Button type="primary" onClick={()=>{this.gocheck()}}>用户名重复校验</Button>
				 <Button type="primary" onClick={()=>{this.addbill()}}>添加账单</Button>
				 <Button type="primary" onClick={()=>{this.getbill()}}>获取全部账本</Button>
			</div>	
        )
    }
}
export default Test;