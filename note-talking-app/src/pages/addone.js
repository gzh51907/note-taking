import React from 'react';
import { Button, Input, Icon, Row, Col, Tooltip } from 'antd';
import Api from '../api/index';
import qs from 'qs';
import axios from 'axios'
import '../css/addone.scss';
import { Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

class Addone extends React.Component {
	state = {
		bottom: '-12.5rem',
		keyword: false,
		iskey: '0',
		type: 0,
		value: '',
		data: [
			{
				text: '唱歌',
			}, {
				text: '跳舞',
			}, {
				text: '看电影',
			}
		],
		cart: [
			{
				id: '1',
				title: '分类',
				text: '娱乐',
				icon: 'appstore',
				color: '#dd779c'
			}, {
				id: '2',
				title: '账号',
				text: '银行卡',
				icon: 'bank',
				color: '#d9ac39'
			}, {
				id: '3',
				title: '商家',
				text: '超市商场',
				icon: 'shop',
				color: '#7abba5'
			}
		],
		alldata: [
			[
				{
					text: '唱歌',
				}, {
					text: '跳舞',
				}, {
					text: '看电影',
				}
			],
			[
				{
					text: '银行',
				}, {
					text: '信用卡',
				}, {
					text: '现金',
				}
			]
		]

	}

	async componentDidMount() {
		let user_name = 'laoyao';
		let datas = await Api.post('/bill/getbill', {
			user_name
		})
		let data = datas[0].note.note_id_1.bill.outcome.list;
		//便签排他
		let arr = [];
		let num = 0;
		let darr = [];
		data.map(item => {
			num = 0;
			arr.forEach(title => {
				if (item.title == title) {
					num++;
				}
			});
			if (num == 0) {
				arr.push(item.title)
				darr.push({ text: item.title })
			}
		});

		this.state.alldata.push(darr)
	}

	check(key) {
		// 内容
		this.setState({
			data: this.state.alldata[key - 1],
			type: key
		})

		// 弹窗
		let isbotton = '';
		// console.log(key,this.state.iskey)

		if (this.state.iskey == key) {
			isbotton = '-12.5rem';
		} else {
			isbotton = 0;
		}
		this.setState({
			iskey: key,
			bottom: isbotton
		})
		if (isbotton == '-12.5rem') {
			this.setState({
				iskey: 0
			})
		}

	}

	change(e) {
		let text = e.target.innerText;
		console.log(text)
		let cart = this.state.cart
		cart.map(item => {
			if (item.id == this.state.type) {
				item.text = text
			}
		})

		this.setState({
			cart: cart
		})
	}
	onChange = ({ target: { value } }) => {
		this.setState({ value });
	};
	render() {
		let { bottom, text, type, value } = this.state;
		let { data, cart } = this.state;
		return (
			<div className={'addone'}>
				<div className={'price'}>
					<div className={'pic'}>
						<Icon type="fund" className={'icon'} />
						<span>照片</span>
					</div>
					<Input placeholder="0.00" className={'input'} />
				</div>
				<ul className={'list'}>
					{
						cart.map(item => {
							return (
								<li onClick={this.check.bind(this, item.id)} key={item.id}>
									<Icon type={item.icon} className={'icon'} style={{ color: item.color }} />
									<span className={'titlt'}>{item.title}</span>
									<span className={'text'}>{item.text}</span>
								</li>
							)
						})
					}
				</ul>
				<div className={'remark'}>
					<TextArea
						value={value}
						onChange={this.onChange}
						placeholder="写下日志，记录这个美好的时刻吧......"
						autoSize={{ minRows: 2, maxRows: 5 }}
					/>
				</div>
				<div className={'box'} style={{ bottom: this.state.bottom }}>
					<Row gutter={[24, 24]}>
						{
							data.map(item => {
								return (
									<Col span={6} className={'col'} key={item.text}>
										<Button onClick={this.change.bind(this)} key={item.text}>{item.text}</Button>
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