import React from 'react';


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
        if (item.day <= 7 && item.month == 11 && item.year==2019) {
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
    outcomelist.map(item=> {
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

//结余small
export function jieyu_small(incomelist, outcomelist) {
    return (incomelist,outcomelist)
} 