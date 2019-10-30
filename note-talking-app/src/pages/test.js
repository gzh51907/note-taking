import React from 'react';
import { Button } from 'antd';
import Api from '../api/index';
import qs from 'qs';
import axios from 'axios'

class Test extends React.Component {
	//登录
	async gologin(){
		let user_name = 'xiaoxie' ;
		let password ='1234567'
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
	
	
	
	
	
	
    render() {
        return (
            <div>
				 <Button type="primary" onClick={()=>{this.gologin()}}>登录</Button>
				 <Button type="primary" onClick={()=>{this.gores()}}>注册</Button>
				 <Button type="primary" onClick={()=>{this.gocheck()}}>用户名重复校验</Button>
			</div>	
        )
    }
}
export default Test;