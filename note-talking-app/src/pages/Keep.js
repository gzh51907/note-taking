import React from 'react';


import { Icon, Tabs ,notification  } from 'antd';
const { TabPane } = Tabs;
import Api from '../api/index';
import { connect } from 'react-redux';


import '../css/keep.css';
import { Route } from 'react-router-dom';
import Addbill from './addbill';
import Addone from './addone';
function callback(key) {

}

const mapStateToProps = ({ keep }) => ({
	isvalue:keep.value,
	isprice:keep.price,
	istitle:keep.title,
	iswallet:keep.wallet,
	ismenukey:keep.menukey,
	alltitle:keep.alltitle,
	imgurl:keep.imgurl
});
const mapDispatchToProps = dispatch => {
    return {
        update(payload) {
            dispatch({ type: 'UPDATE_SELECTED', payload })
            let { history } = this.props;
            history.push('/home')
        },
        dispatch
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class Keep extends React.Component {

    state = {
        activeKey:"0",
        keep_menu: [{ name: "支出",
					  come:'outcome'},
        { name: "收入",
		 come:'income'},
        { name: "转账",
		 come:'tracome'},
        { name: "余额",
		 come:'surcome'},
        { name: "借贷",
		 come:'borcome'}]
    }

    changeType = async (name) => {
        let { history } = this.props;
        history.push('/keep/' + name)
    }
    componentDidMount() {
        let { history} = this.props;
        history.push('/keep/' + 0)
    }

	// ----------------
	 pushBill =async () => {
			let {isvalue,isprice,istitle,iswallet,ismenukey,alltitle,imgurl}=this.props
			// console.log(isvalue,isprice,istitle,iswallet,ismenukey,)
			console.log(imgurl)
			//收入或者支出
			let type=''
			this.state.keep_menu.map((item,index)=>{
				if(index==ismenukey){
					type=item.come
				}
			})
			// console.log(type)
			// 用户名
			let user= localStorage.getItem("user")
			let user_name="";
			if(user){
				 user_name=JSON.parse(user).user_name;
			}else{
				let { history } = this.props;
				history.push('/makr')
			}
			//账本编号
			let node_id='note_id_1';
			//账本名
			// let note_name='默认账本'
			//消费类型
			let title=alltitle.title;
			let icon=alltitle.icon
			let color=alltitle.color
			let title_1=alltitle.title_1
			let icon_1=alltitle.icon_1
			let color_1=alltitle.color_1
			//价钱
			let price=isprice;
			//备注
			let text=isvalue
			//钱包（账号）
			let wallet=iswallet
			imgurl=imgurl.toString()
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
				text,
				wallet,
				imgurl
			})
			if(datas.code==1){
				alert('保存成功');
				 let { history } = this.props;
				            history.push('/home')
				this.props.dispatch({ type: 'GET_DATA_ASYNC' });
			}
			
	};
	
    render() {

        let { keep_menu, activeKey} = this.state;
        let { match, update ,isvalue}=this.props

        return (
            <div className="keep">
                <div className="keep_top">
                    <div className="keep_top_top">
                        <div ><Icon type="left" onClick={update.bind(this, '/home')}></Icon></div>
                        <div style={{ fontWeight: 900 }}>记一笔</div>
                        <div style={{ fontWeight: 600, color: "#e9a944" }}>
                            <Icon type="check"></Icon>
                            <span onClick={this.pushBill}>保存</span>
                        </div>
                    </div>
                    <div>
                        <Tabs defaultActiveKey={activeKey} onChange={callback} tabPosition='top' size="small" tabBarGutter={16}
                            onChange={this.changeType}
                            style={{ textAlign: "center", backgroundColor: "#fff" }} >
                            {
                                keep_menu.map((item, index) => {
                                    return (<TabPane tab={item.name} key={index}>
                                        <Route path={match.path + "/:name"} component={Addone}></Route>
                                    </TabPane>)
                                })

                            }
                        </Tabs>
                    </div>
                </div>

                <div className="keep_bottom">
                  <span onClick={this.pushBill}>保存</span>
                  <span>存为模板</span>
                  <span>再记一笔</span>
                </div>
            </div>
        )
    }
}
export default Keep;