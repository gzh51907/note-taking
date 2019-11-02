import React from 'react';
import '../css/home.css';
import { Icon } from 'antd';


import { connect } from 'react-redux';
const mapStateToProps = ({ home }) => ({
    outcomelist: home.outcomelist,
    incomelist: home.incomelist
});

import { year_outcome, year_income, week_outcome, week_intcome, month_outcome, month_income, day_outcome, day_intcome} from './time';

@connect(mapStateToProps)

class Home extends React.Component {
    render() {

        let { outcomelist, incomelist } = this.props
        
        
        return (
            <div>
                <div className="top">
                    <div className="left">
                        <span>默认模板</span>
                        <Icon type="right" ></Icon>
                    </div>
                    <div className="right">
                        <li>
                            <Icon type="wallet" style={{ color: "#da6a90" }}></Icon>
                            <span>贷款</span>
                        </li>
                        <li>
                            <Icon type="wallet" style={{ color: "#da6a90" }}></Icon>
                            <span>预算</span>
                        </li>
                        <li>
                            <Icon type="snippets" style={{ color: "#c9a78b" }}></Icon>
                            <span>场景</span>
                        </li>
                        <li>
                            <Icon type="reddit" style={{ color: "#998fd6" }}></Icon>
                            <span>学院</span>
                        </li>
                        <li>
                            <Icon type="crown" style={{ color: "#d4d4d2" }}></Icon>
                            <span>服务</span>
                        </li>
                    </div>
                </div>
                <div className="center">
                    <div className="centetr_top">
                        <span>11</span>
                        <span>月‧支出</span>
                    </div>
                    <div className="centetr_center">
                        <span>{month_outcome(outcomelist)}</span>
                        <Icon type="instagram" ></Icon>
                    </div>
                    <div className="centetr_bottom">
                        <span>预算</span>
                        <span>点此设置</span>
                        <span>|</span>
                        <span>本月收入</span>
                        <span>{month_income(incomelist)}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="together">
                        <div className="together_left">
                            <div className="small_title"><Icon type="alert"></Icon></div>
                            <div className="small_title2">
                                <p>今天</p>
                                <p>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p>{day_outcome(outcomelist)}</p>
                                <p>{day_intcome(incomelist)}</p>
                            </div>
                            <div><Icon type="right"></Icon></div>
                        </div>
                    </div>
                    <div className="together">
                        <div className="together_left">
                            <div className="small_title"><Icon type="calendar" style={{ color: "#c9e4ff" }}></Icon></div>
                            <div className="small_title2">
                                <p>本周</p>
                                <p>
                                    <span>11月1日</span>
                                    <span>-</span>
                                    <span>11月7日</span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p>{week_outcome(outcomelist)}</p>
                                <p>{week_intcome(incomelist)}</p>
                            </div>
                            <div><Icon type="right"></Icon></div>
                        </div>
                    </div>
                    <div className="together">
                        <div className="together_left">
                            <div className="small_title"><Icon type="schedule" style={{ color: "#fde38f" }}></Icon></div>
                            <div className="small_title2">
                                <p>本月</p>
                                <p>
                                    <span>11月1日</span>
                                    <span>-</span>
                                    <span>11月30日</span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p>{month_outcome(outcomelist)}</p>
                                <p>{month_income(incomelist)}</p>
                            </div>
                            <div><Icon type="right"></Icon></div>
                        </div>
                    </div>
                    <div className="together">
                        <div className="together_left">
                            <div className="small_title"><Icon type="reconciliation" style={{ color: "#ffd1e5" }}></Icon></div>
                            <div className="small_title2">
                                <p>本年</p>
                                <p>
                                    <span>2019年</span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p>{year_outcome(outcomelist)}</p>
                                <p>{year_income(incomelist)}</p>
                            </div>
                            <div><Icon type="right"></Icon></div>
                        </div>
                    </div>
                    <div className="together">
                        <div className="together_left">
                            <div className="small_title"><Icon type="edit" style={{ color: "#bcb8f9" }}></Icon></div>
                            <div className="small_title2">
                                <p>社区</p>
                                <p>                                  
                                    <span>写作变现的4个途径，适合开源</span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p style={{ color:"#e9a040"}}>签到领现金</p>
                            </div>
                            <div><Icon type="right"></Icon></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;