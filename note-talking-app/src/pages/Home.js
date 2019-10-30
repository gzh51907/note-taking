import React from 'react';
import '../css/home.css';
import { Icon } from 'antd';
class Home extends React.Component {
    render() {
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
                        <span>10</span>
                        <span>月‧支出</span>
                    </div>
                    <div className="centetr_center">
                        <span>15.00</span>
                        <Icon type="instagram" ></Icon>
                    </div>
                    <div className="centetr_bottom">
                        <span>预算</span>
                        <span>点此设置</span>
                        <span>|</span>
                        <span>本月收入</span>
                        <span>0.00</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="together">
                        <div className="together_left">
                            <div className="small_title"><Icon type="alert"></Icon></div>
                            <div className="small_title2">
                                <p>今天</p>
                                <p>
                                    <span>最近一笔</span>
                                    <span>早午晚餐</span>
                                    <span>15.00</span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p>00.00</p>
                                <p>15.00</p>
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
                                    <span>10月28日</span>
                                    <span>-</span>
                                    <span>11月3日</span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p>00.00</p>
                                <p>15.00</p>
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
                                    <span>10月1日</span>
                                    <span>-</span>
                                    <span>10月31日</span>
                                </p>
                            </div>
                        </div>
                        <div className="together_right">
                            <div className="right_number">
                                <p>00.00</p>
                                <p>15.00</p>
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
                                <p>00.00</p>
                                <p>15.00</p>
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