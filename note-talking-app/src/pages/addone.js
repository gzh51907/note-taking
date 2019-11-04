import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button,Input ,Icon,Row,Col,Tooltip ,Form, Radio} from 'antd';
import Api from '../api/index';
import qs from 'qs';
import axios from 'axios'
import '../css/addone.scss';
import { Select } from 'antd';
import keepAction from '../store/action/keep'
const { Option } = Select;
const { TextArea } = Input;
import {bindActionCreators} from 'redux';

const mapStateToProps = ({ keep }) => ({
	isvalue:keep.value,
	isprice:keep.price,
	istitle:keep.title,
	iswallet:keep.wallet,
	ismenukey:keep.menukey,
	alltitle:keep.alltitle,
});
const mapDispatchToProps = dispatch => {
     return bindActionCreators(keepAction,dispatch)
}
@connect(mapStateToProps,mapDispatchToProps)
class Addone extends React.Component {
	state = {
		display:'none',
		bottom:'-12.5rem',
		keyword:false,
		iskey:'0',
		type:0,
		value: '',
		titlevalue:'标签',
		iconvalue:'red-envelope',
		colorvalue:'#e59f49',
		data:[],
		iconlist:['account-book','red-envelope','pay-circle','money-collect','dollar','tags'],
		colorlist:['#ff8cb7','#e59f49','#01d10c','#02a0ea','#8979db'],
		cartmodu:[
			[
				{
					id:'1',
					title:'消费方式',
					text:'',
					icon:'appstore',
					color:'#dd779c',
					icon_1:'',
					color_1:''
					
				},{
					id:'2',
					title:'支出钱包',
					text:'',
					icon:'bank',
					color:'#d9ac39',
					icon_1:'',
					color_1:''
				}
			],[
				{
					id:'1',
					title:'收入方式',
					text:'',
					icon:'appstore',
					color:'#dd779c',
					icon_1:'',
					color_1:''
					
				},{
					id:'2',
					title:'收入钱包',
					text:'',
					icon:'bank',
					color:'#d9ac39',
					icon_1:'',
					color_1:''
				}
			],[
				{
					id:'1',
					title:'转出钱包',
					text:'',
					icon:'appstore',
					color:'#dd779c',
					icon_1:'',
					color_1:''
					
				},{
					id:'2',
					title:'转入钱包',
					text:'',
					icon:'bank',
					color:'#d9ac39',
					icon_1:'',
					color_1:''
				}
			],
		],
		cart:[],
		alldata:[]
	}  
	
	
	async componentDidMount(){		
		let {match,changeMenuket}=this.props;
		let come = match.params.name ;
		changeMenuket(match.params.name)
		//获取存在本地用户名
		let user= localStorage.getItem("user")
		let user_name="";
		if(user){
			 user_name=JSON.parse(user).user_name
		}else{
			let { history } = this.props;
			history.push('/makr')
		}
		//----------------------
			let data=[];
			let datas=await Api.post('/bill/getbill',{
				user_name
			})
			this.setState({
				cart:this.state.cartmodu[come]
			})
			//选择类型
			if(come==0){
				if(datas[0].note.note_id_1.bill.outcome){
					data = datas[0].note.note_id_1.bill.outcome.list;
				}
			}else if(come==1){
				if(datas[0].note.note_id_1.bill.income){
					data =datas[0].note.note_id_1.bill.income.list;
				}
			}else if(come==2){
				if(datas[0].note.note_id_1.bill.tracome){
					data =datas[0].note.note_id_1.bill.tracome.list;
				}
			}
			
			//便签排他
			let arr=[];
			let arr1=[];
			let num=0;
			let num1=0;
			let darr=[];
			let darr1=[];
			data.map(item=>{
				num=0;
				num1=0;
				arr.forEach(title=>{
					if(item.title==title){
						num++;
					}
				});
				arr1.forEach(title_1=>{
					if(item.title_1==title_1){
						num1++;
					}
				});
				
				if(num==0){
					arr.push(item.title)
					darr.push({text:item.title,icon:item.icon,color:item.color})
				}
				if(num1==0){
					arr1.push(item.title_1)
					darr1.push({text:item.title_1,icon:item.icon_1,color:item.color_1})
				}
			})
			this.state.alldata.push(darr)
			this.state.alldata.push(darr1)
	}
	
	check(key){	
		// 内容
		this.setState({
			data:this.state.alldata[key-1],
			type:key
		})
		
		// 弹窗
		let isbotton='';
		// console.log(key,this.state.iskey)
		
		if(this.state.iskey==key){
			isbotton='-12.5rem';
		}else{
			isbotton=0;
		}
		this.setState({
			iskey:key,
			bottom:isbotton
		})
		if(isbotton=='-12.5rem'){
			this.setState({
				iskey:0
			})
		}
		
	}
	
	change(e){
		let text=e.target.innerText;
		//正则获取字体图标
		let str2 =e.target.innerHTML;
		let arr=[];
		let reg = /data-icon=['|"]?([\w+\s+\-]+)['|"]?/g;
		 var flag1 = str2.replace(reg, function ($0, $1) {
			 arr.push($1);
		  });
		let arr1=[];
		let reg1 = /color[:]?([\w+\s+\(\)/+\,]+)[;]?/g;
		var flag1 = str2.replace(reg1, function ($0, $1) {
			arr1.push($1);
			});		
		let cart= this.state.cart
		cart.map(item=>{
			if(item.id==this.state.type){
				item.text=text
				item.icon_1=arr[0];
				item.color_1=arr1[0];
			}
		})
		this.setState({
			cart:cart
		})
		let { changeAlltitle}= this.props;
		let alltitle={}
		if(this.state.type==1){
			alltitle={
				"title" : text,
			    "icon" : arr[0],
			    "color" : arr1[0],
			}
		}else if(this.state.type==2){
			alltitle={
			    "title_1" : text,
			    "icon_1" : arr[0],
			    "color_1" : arr1[0],
			}
		}
		changeAlltitle(alltitle)
		
		
	}
	  onChange = ({ target: { value } }) => {
		let { onChange}= this.props;
		onChange(value)
	  };
	  changePrice= ({ target: { value } }) => {
		let { changePrice}= this.props;
		changePrice(value)
	  };
	  
	  titlebox=()=>{
		  // console.log(89)
		  this.setState({
			  display:'block'
		  })
	  }
	  onColor = e => {
	      console.log(e.target.value);
	      this.setState({
	        colorvalue: e.target.value,
	      });
	    };
		onIcon= e => {
	      this.setState({
	        iconvalue: e.target.value,
	      });
	    };
		titchange = e => {
	      this.setState({
	        titlevalue: e.target.value,
	      });
	    };
		save=()=>{
			let {titlevalue,iconvalue,colorvalue}=this.state
			console.log(titlevalue,iconvalue,colorvalue)
			let cart= this.state.cart
			cart.map(item=>{
				if(item.id==this.state.type){
					item.text=titlevalue
					item.icon_1=iconvalue;
					item.color_1=colorvalue;
				}
			})
			this.setState({
				cart:cart,
				display:"none"
			})
			let { changeAlltitle}= this.props;
			let alltitle={}
			if(this.state.type==1){
				alltitle={
					"title" : titlevalue,
				    "icon" : iconvalue,
				    "color" : colorvalue,
				}
			}else if(this.state.type==2){
				alltitle={
				    "title_1" : titlevalue,
				    "icon_1" : iconvalue,
				    "color_1" : colorvalue,
				}
			}
			changeAlltitle(alltitle)
		}
    render() {
		let {match,changeMenuket}=this.props;
		changeMenuket(match.params.name)
		let {bottom,text,type,value,display,iconlist,colorlist,titlevalue}=this.state;
		let { isvalue,isprice}= this.props;
		let {data,cart}=this.state;
		// this.setState({
		// 	this.state.value:isvalue
		// })
        return (	
            <div className={'addone'} >
				<div className={"addtitle"} style={{display:display}}>,
					 <Form layout="inline">
					        <Form.Item>
								<h3>标题:</h3>
					        </Form.Item>
							<Form.Item >
								<Input placeholder="输入标签" value={titlevalue} onChange={this.titchange}/>
							</Form.Item>
					        <Form.Item>
					          <Button type="primary" htmlType="submit" onClick={this.save}>
					            保存
					          </Button>
					        </Form.Item>
					      </Form>
						<div>
						<h2 >请选择图标颜色</h2>
						  <Radio.Group onChange={this.onColor} value={this.state.colorvalue}>
						  {
									colorlist.map(item=>{
										return(
										<Radio value={item} key={item}>
											<span style={{backgroundColor:item}} className={'colorCart'}>color</span>
										</Radio>
										)
									})
									}
						   </Radio.Group>
						  </div>  
					<div  className={'iconbox'}>
						<h2 >请选择字体图标</h2>
						<Radio.Group onChange={this.onIcon} value={this.state.iconvalue} className={'iconlist'}>
						{
									iconlist.map(item=>{
										return(
										<Radio value={item} key={item} className={'icon'}>
											<Button key={item}>
											<Icon type={item} className={'icon'}/>
											</Button>
										</Radio>
										)
									})
									}
						 </Radio.Group>
					</div>
				</div>
				<div className={'price'}>
					<div  className={'pic'}>
						<Icon type="fund" className={'icon'}/>
						<span>照片</span>
					</div>
					<Input placeholder="0.00" 
					className={'input'}
					value={isprice}
					onChange={this.changePrice}
					/>
				</div>
				<ul  className={'list'}>
				{
					cart.map(item =>{
						return(
							<li onClick={this.check.bind(this,item.id)} key={item.id}>
								<Icon type={item.icon} className={'icon'} style={{color:item.color}}/>
								<span className={'titlt'}>{item.title}</span>
								<Icon type="arrow-right" />
								<span className={'text'}>{item.text}</span>
								<Icon type={item.icon_1} className={'icon_1'}  style={{color:item.color_1}}/>
							</li>
						)
					})
				}
				</ul>
				<div className={'remark'}>
					 <TextArea
					          value={isvalue}
							  onChange={this.onChange}
					          placeholder="写下日志，记录这个美好的时刻吧......"
					          autoSize={{ minRows: 2, maxRows: 5 }}
					        />
				</div>
				<div className={'box'} style={{bottom:this.state.bottom}}>
						<Button type="link" onClick={this.titlebox}>手动添加标题</Button>
					<Row gutter={[24, 24]}>
						{
							data.map(item =>{
								return(
									<Col span={6} className={'col'} key={item.text}>
										<Button onClick={this.change.bind(this)} key={item.text}>
										<Icon type={item.icon} className={'icon'}  style={{color:item.color}}/>
										{item.text}
										</Button>
									</Col>
								)
							})
						}
					</Row>
				</div>
			</div>	
        )
    }
}
export default Addone;