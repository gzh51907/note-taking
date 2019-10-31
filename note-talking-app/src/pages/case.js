import React from 'react';
import { Button,Input } from 'antd';
import Api from '../api/index';
import qs from 'qs';
import axios from 'axios'
import '../css/case.scss';
import { Select } from 'antd';

const { Option } = Select;

class Case extends React.Component {
	state = {
		bottom:'-12.5rem',
		keyword:false,
		iskey:'1',
		text:'吃饭',
		data:[
			{
				text:'唱歌',
			},{
				text:'跳舞',
			},{
				text:'看电影',
			}
		],
		cart:[
			{
				id:'1',
				title:'分类',
				text:'唱歌',
				keyword:false
			},{
				id:'2',
				title:'账号',
				text:'跳舞',
				keyword:false,
			},{
				id:'3',
				title:'商家',
				text:'看电影',
				keyword:false,
			}
		]
	}  
	
	
	check(key){	
		console.log(key)
		let isbotton='';
		if(this.state.iskey!=key){
			console.log(this.state.iskey)
			isbotton='-12.5rem';
			// let isbotton='';
			// let iskeyword= !this.state.keyword
			// iskeyword?isbotton=0:isbotton='-12.5rem';
			// this.setState({
			// 	keyword:iskeyword,
			// 	bottom:isbotton
			// })
		}else{
			isbotton=0;
		}
		this.setState({
			// keyword:iskeyword,
			iskey:key,
			bottom:isbotton
		})
		console.log(this.state.iskey)
		
	}
	
	change(e){
		let text=e.target.innerText;
		this.setState({
			text:text
		})
	}
	
    render() {
		let {bottom,text}=this.state;
		let {data,cart}=this.state;
        return (
		
            <div className={'addbill'}>
				{
					cart.map(item=>{
						return(
						<div onClick={this.check.bind(this,item.id)} key={item.id} className={'iscar'}>
						<p>{item.title}</p>
						<p>{item.text}</p>
						
						</div>
						)
					})
				}
				 <div className={'box'} style={{bottom:this.state.bottom}}>,
					{
						data.map(item=>{
							return(
								<h5 onClick={this.change.bind(this)} key={item.text}>{item.text}</h5>
							)
						})
					}
				 </div>
			</div>	
        )
    }
}
export default Case;