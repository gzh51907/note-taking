import React, { Component } from 'react';
// 引入 ECharts 主模块
// var echarts = require('echarts');
import '../css/bing.css'
// 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementsByClassName('bing')[0]);
        // 绘制图表

        myChart.setOption({
            // roseType: 'angle',
            tooltip: {},
            series: [
                {
                    name: '消费细分',
                    type: 'pie',
                    radius: '55%',
                    radius: ['30%', '60%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    data: [
                        { value: 235, name: '交通' },
                        { value: 274, name: '房租' },
                        { value: 310, name: '旅行' },
                        { value: 335, name: '购物' },
                        { value: 400, name: '吃喝' }
                    ]
                }
            ],
            color: ['#FF9F7F', '#FFD700', '#C9C9C9', '#E066FF', '#C0FF3E']
        });
    }
    render() {
        return (
            <div className="bing"></div>
        );
    }
}

export default EchartsTest;

