import React from 'react';

import { Icon, Tabs } from 'antd';
const { TabPane } = Tabs;

import { connect } from 'react-redux';


import '../css/keep.css';
import { Route } from 'react-router-dom';
import Addbill from './addbill';
function callback(key) {
    console.log(key);
}
const mapStateToProps = ({ home }) => ({

});
const mapDispatchToProps = dispatch => {
    return {
        update(payload) {
            dispatch({ type: 'UPDATE_SELECTED', payload })
            let { history } = this.props;
            history.push('/home')
        },
        dispatch
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class Keep extends React.Component {

    state = {
        activeKey:"1",
        keep_menu: [{ name: "支出" },
        { name: "收入" },
        { name: "转账" },
        { name: "余额" },
        { name: "借贷" }]
    }

    changeType = async (name) => {
        let { history } = this.props;
        history.push('/keep/' + name)
    }
  
    render() {

        let { keep_menu, activeKey} = this.state;
        let { match, update}=this.props

        return (
            <div className="keep">
                <div className="keep_top">
                    <div className="keep_top_top">
                        <div ><Icon type="left" onClick={update.bind(this,'/home')}></Icon></div>
                        <div style={{ fontWeight: 900 }}>记一笔</div>
                        <div style={{ fontWeight: 600, color: "#e9a944" }}>
                            <Icon type="check"></Icon>
                            <span>保存</span>
                        </div>
                    </div>
                    <div>
                        <Tabs defaultActiveKey={activeKey} onChange={callback} tabPosition='top' size="small" tabBarGutter={16}
                            onChange={this.changeType}
                            style={{ textAlign: "center", backgroundColor: "#fff" }} >
                            {
                                keep_menu.map((item, index) => {
                                    return (<TabPane tab={item.name} key={index}>
                                            <Route path={match.path + "/:name"} component={Addbill}></Route>
                                           </TabPane>)
                                }) 
                                
                          }
                        </Tabs>
                    </div>
                </div>
               
                <div className="keep_bottom">
                  <span>保存</span>
                  <span>存为模板</span>
                  <span>再记一笔</span>
                </div>
            </div>
        )
    }
}
export default Keep;