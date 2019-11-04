import React from 'react';
import { Button } from 'antd';
import Api from '../api/index';
import qs from 'qs';
import axios from 'axios'

class Test extends React.Component {
	state={
			// type:['吃喝','娱乐','交通','穿衣','通信','房租','医疗','购物','旅行'],
			// type2:['gold','customer-service','car','skin','shake','home','medicine-box','shop','camera'],
			// type3:['#e59f49','#ff8cb7','#02a0ea','#ff8cb7','#02a0ea','#02a0ea','#ff8cb7','#ff8cb7','#01d10c'],
			type:['工资','奖金','礼金','红包','利息','其他'],
			type2:['account-book','red-envelope','pay-circle','money-collect','dollar','tags'],
			type3:['#ff8cb7','#e59f49','#e59f49','#01d10c','#02a0ea','#8979db'],
			purse:['现金','银行卡','信用卡','微信钱包','支付宝'],
			icon:['red-envelope','wallet','schedule','wechat','alipay-circle'],
			color:['#ff8cb7','#e59f49','#e59f49','#01d10c','#02a0ea'],
		}
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
		let user_name = '老姚';
		let datas=await Api.get('/user/check',{
			user_name:user_name
		})
		console.log(datas)
	}
		//提交账单
		async addbill(){
			let num= parseInt(2*Math.random()+1);
			let num2= parseInt(6*Math.random());
			console.log(this.state.type[num]);
			console.log(this.state.type2[num]);
			console.log(this.state.type3[num]);
			console.log(this.state.purse[num2]);
			console.log(this.state.icon[num2]);
			console.log(this.state.color[num2]);
			// 用户名
			let user_name = 'laoyao';
			//账本编号
			let node_id='note_id_1';
			//账本名
			// let note_name='默认账本'
			//收入或者支出
			// let type='outcome';
			// let type='income';
			let type='tracome';
			//消费类型
			// let title='赌博'
			// let title=this.state.type[num];
			// let icon=this.state.type2[num];
			// let color=this.state.type3[num];
			let snum=num2+num
			if(snum>5){
				snum=num
			}
			let title=this.state.purse[snum];
			let icon=this.state.icon[snum];
			let color=this.state.color[snum];
			
			let title_1=this.state.purse[num2];
			let icon_1=this.state.icon[num2];
			let color_1=this.state.color[num2];
			//价钱
			let price=num*77;
			//备注
			// let text='珍惜生命，远离赌博'
			let text=`这是一个关于${this.state.type[num]}的账单`
			let datas=await Api.post('/bill/addbill',{
				user_name,
				node_id,
				type,
				title,
				icon,
				color,
				title_1,
				icon_1,
				color_1,
				price,
				text
			})
			console.log(datas)
		}
	
	//获取某个用户的全部账本
	async getbill(){
		// 用户名
		let user_name = 'laoyao';
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