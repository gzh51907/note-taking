import React from 'react';
import "../css/list.css";
import { Icon, Collapse } from 'antd';
const { Panel } = Collapse;
import { List_son } from './List_son';


import { connect } from 'react-redux';
const mapStateToProps = ({ home }) => ({
    outcomelist: home.outcomelist,
    incomelist: home.incomelist
});




import { year_outcome, year_income, jieyu,jieyu_small } from './time';

@connect(mapStateToProps)


class List extends React.Component {
    state = {
        expandIconPosition: 'right',
        monthlist: [
            {
                year: 2019,
                month: "12月"
            },
            {
                year: 2019,
                month: "11月"
            },
            {
                year: 2019,
                month: "10月"
            },
            {
                year: 2019,
                month: "9月"
            },
            {
                year: 2019,
                month: "8月"
            },
            {
                year: 2019,
                month: "7月"
            },
            {
                year: 2019,
                month: "6月"
            },
            {
                year: 2019,
                month: "5月"
            },
            {
                year: 2019,
                month: "4月"
            },
            {
                year: 2019,
                month: "3月"
            },
            {
                year: 2019,
                month: "2月"
            },
            {
                year: 2019,
                month: "1月"
            }
        ]
    }
    creatmonth = function (year, month, incomelist, outcomelist ) {
        
        return (<div className="list_son_son">
            <div className="son_one">
                <p>{month}</p>
                <p>{year}</p>
            </div>
            <div className="son_two">
                <p>
                    <span>0.00</span>
                    <span>结余</span>
                </p>
                <p>
                    <span style={{ color: "#eaa294" }}>收入</span>
                    <span style={{ color: "#aaaaaa" }}>0.00</span>
                    <span style={{ color: "#aaaaaa" }}>|</span>
                    <span style={{ color: "#abe0ce" }}>支出</span>
                    <span style={{ color: "#aaaaaa" }}>0.00</span>
                </p>
            </div>
        </div>)
    }

    render() {
        let { outcomelist, incomelist} = this.props
        const { expandIconPosition, monthlist} = this.state;
        return (
            <div className="list">
                <div className="list_top">
                    <div className="list_top_left">
                        <Icon type="left"></Icon>
                        <span>2019年流水</span>
                    </div>
                    <div className="list_top_right">
                        <Icon type="dash"></Icon>
                        <Icon type="zoom-in"></Icon>
                        <Icon type="plus" ></Icon>
                    </div>
                </div>
                <div className="list_center">
                    <p>结余</p>
                    <p>{jieyu(incomelist, outcomelist)}</p>
                    <p>
                        <span>收入</span>
                        <span>{year_income(incomelist)}</span>
                        <span>|</span>
                        <span>支出</span>
                        <span>{year_outcome(outcomelist)}</span>
                    </p>
                </div>
                <div className="list_bottom">
                    <Collapse expandIconPosition={expandIconPosition} bordered={false} >
                        <Panel header={<List_son />} key="2" className="list_nav">
                            {
                                monthlist.map(item => {
                                    return (
                                        <Collapse key={item.month} expandIconPosition={expandIconPosition} bordered={false}>
                                            <Panel key="2" header={this.creatmonth(item.year, item.month, incomelist, outcomelist)} >
                                                {<div>测试</div>}
                                            </Panel>
                                        </Collapse>
                                    )
                                })
                            }
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}
export default List;

