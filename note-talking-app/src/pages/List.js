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




import { year_outcome, year_income, jieyu, jieyu_small, shouru_small, small_list1, zhichu_small, small_list2 } from './time';

@connect(mapStateToProps)


class List extends React.Component {
    state = {
        expandIconPosition: 'right',
        monthlist: [
            {
                year: 2019,
                month: "11"
            },
            {
                year: 2019,
                month: "10"
            },
            {
                year: 2019,
                month: "9"
            },
            {
                year: 2019,
                month: "8"
            },
            {
                year: 2019,
                month: "7"
            },
            {
                year: 2019,
                month: "6"
            },
            {
                year: 2019,
                month: "5"
            },
            {
                year: 2019,
                month: "4"
            },
            {
                year: 2019,
                month: "3"
            },
            {
                year: 2019,
                month: "2"
            },
            {
                year: 2019,
                month: "1"
            }
        ]
    }
    creatmonth = function (year, month, incomelist, outcomelist) {

        return (<div className="list_son_son">
            <div className="son_one">
                <p>{month}月</p>
                <p>{year}</p>
            </div>
            <div className="son_two">
                <p>
                    <span>{jieyu_small(year, month, incomelist, outcomelist)}</span>
                    <span>结余</span>
                </p>
                <p>
                    <span style={{ color: "#eaa294" }}>收入</span>
                    <span style={{ color: "#aaaaaa" }}>{shouru_small(year, month, incomelist)}</span>
                    <span style={{ color: "#aaaaaa" }}>|</span>
                    <span style={{ color: "#abe0ce" }}>支出</span>
                    <span style={{ color: "#aaaaaa" }}>{zhichu_small(year, month, outcomelist)}</span>
                </p>
            </div>
        </div>)
    }

    render() {
        let { outcomelist, incomelist } = this.props
        const { expandIconPosition, monthlist } = this.state;
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
                                                {small_list1(item.month, incomelist, outcomelist)}
                                                { small_list2(item.month, incomelist, outcomelist)}
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

