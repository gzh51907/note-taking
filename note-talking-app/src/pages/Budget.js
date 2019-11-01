import React from 'react';
import { Icon } from 'antd';
import '../css/budget.css'

class Budget extends React.Component {
    state = {
        iconlist: [
            {
                text: "记账设计",
                type: 'edit',
                color:'#f0b24c'
            }, {
                text: "首页设计",
                type: 'desktop',
                color: '#ee886c'
            }, {
                text: "分类标签",
                type: 'menu',
                color: '#b1acf9'
            }, {
                text: "预算中心",
                type: 'reconciliation',
                color: '#f0b24c'
            }, {
                text: "超级流水",
                type: 'layout',
                color: '#eead49'
            }, {
                text: "图表分析",
                type: 'pie-chart',
                color: '#61c18a'
            }, {
                text: "主题换肤",
                type: 'radar-chart',
                color: '#ec6f8c'
            },
    ]
}
    render() {
        let { iconlist } = this.state;
        return (
            <div className="budget">
                <div className="budget_top">
                    <p className="pone">
                        <Icon type="left"></Icon>
                    </p>
                    <p className="ptwo">
                        <span>默认账本</span>
                        <Icon type="edit"></Icon>
                    </p>
                </div >
                <div className="budget_center">
                    <div className="divone">
                        <div>多人记账·共享流水</div>
                        <div className="divone_son">
                            <span>共</span>
                            <span>1</span>
                            <span>人</span>
                            <Icon type="right"></Icon>
                        </div>
                    </div>
                    <span className="point"></span>
                    <div className="divtwo">
                        <div className="divtwo_son">
                            <Icon type="user"></Icon>
                            <span>1234567</span>
                        </div>
                        <div className="divtwo_son">
                            <Icon type="plus-circle"></Icon>
                            <span>邀请</span>
                        </div>
                    </div>
                </div>
                <div className="budget_bottom">
                    {
                    iconlist.map(item => {
                        return (
                            <div key={item.text} className="budget_bottom_son">
                                <div><Icon type={item.type} style={{color:item.color}}></Icon><span>{item.text}</span></div>
                                <div><Icon type="right"></Icon></div>
                            </div>
                        )
                    })
                    }
                </div>
            </div >
        )
    }
}
export default Budget;