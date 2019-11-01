import React from 'react';
import { Icon } from 'antd';

var now = new Date();
var now_date = now.getDate();//得到日期



// 今年支出账单
export function year_outcome(outcomelist) {
    var num = 0
    outcomelist.map(item => {
        if (item.year == 2019) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}
// 今年收入账单
export function year_income(incomelist) {
    var num = 0
    incomelist.map(item => {
        if (item.year == 2019) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}
//结余
export function jieyu(incomelist, outcomelist) {
    var out_num = 0
    var in_num = 0
    outcomelist.map(item => {
        if (item.year == 2019) {
            out_num += Number(item.price)
        }
    })
    incomelist.map(item => {
        if (item.year == 2019) {
            in_num += Number(item.price)
        }
    })
    return (in_num - out_num).toFixed(2)
}

// 本周支出账单
export function week_outcome(outcomelist) {
    var num = 0
    outcomelist.map(item => {
        if (item.day <= 7 && item.month == 11 && item.year == 2019) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}
// 本周收入账单
export function week_intcome(incomelist) {
    var num = 0
    incomelist.map(item => {
        if (item.day <= 7 && item.month == 11 && item.year == 2019) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}

// 本月支出账单
export function month_outcome(outcomelist) {
    var num = 0
    outcomelist.map(item => {
        if (item.month == 11 && item.year == 2019) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}

// 本月收入账单
export function month_income(incomelist) {
    var num = 0
    incomelist.map(item => {
        if (item.month == 11 && item.year == 2019) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}

//本日支出账单
export function day_outcome(outcomelist) {
    var num = 0
    outcomelist.map(item => {
        if (item.month == 11 && item.year == 2019 && item.day == now_date) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}
//本日收入账单
export function day_intcome(incomelist) {
    var num = 0
    incomelist.map(item => {
        if (item.month == 11 && item.year == 2019 && item.day == now_date) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}

//small结余
export function jieyu_small(year, month, incomelist, outcomelist) {
    var out_num = 0
    var in_num = 0
    outcomelist.map(item => {
        if (item.year == year && item.month == month) {
            out_num += Number(item.price)
        }
    })
    incomelist.map(item => {
        if (item.year == year && item.month == month) {
            in_num += Number(item.price)
        }
    })
    return (in_num - out_num).toFixed(2)

}
//small收入
export function shouru_small(year, month, incomelist) {
    var num = 0
    incomelist.map(item => {
        if (item.month == month && item.year == year) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}
//small支出
export function zhichu_small(year, month, outcomelist) {
    var num = 0
    outcomelist.map(item => {
        if (item.month == month && item.year == year) {
            num += Number(item.price)
        }
    })
    return num.toFixed(2)
}

//渲染small——list

export function small_list1(month, incomelist, outcomelist) {

    let incomelist_date = incomelist.map(item => {
        if (item.month == month) {
            console.log("item.week", item.week)
            console.log(item.day)
            return (<div key={item.list_id} className="last_list">
                <div className="last_list_left">
                    <p>
                        <span>{item.day}</span>
                        <span>周一{item.week}</span>
                    </p>
                    <p><Icon type="crown"></Icon></p>
                    <p>{item.title}</p>
                </div>
                <div className="last_list_right">{item.price}.00</div>
            </div>)
        }
    })
    return incomelist_date
}
export function small_list2(month, incomelist, outcomelist) {

    let outcomelist_date = outcomelist.map(item => {
        if (item.month == month) {
          
            return (<div key={item.list_id} className="last_list">
                        <div className="last_list_left">
                            <p>
                                <span>{item.day}</span>
                                <span>周{item.week}</span>
                            </p>
                            <p><Icon type="user"></Icon></p>
                            <p>{item.title}</p>
                        </div>
                        <div className="last_list_right" style={{ color: "red" }}>{item.price}.00</div>
                    </div>)
        }
    })
    return outcomelist_date
}