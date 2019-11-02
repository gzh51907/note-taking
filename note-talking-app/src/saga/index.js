/**
 * Redux-Saga
    * Generator生成器函数
    * Iterator迭代器
        * next()        在yield返回结果后，saga在内部自定调用next()
 */

import { takeEvery, takeLatest, put, call, apply } from 'redux-saga/effects';
import Api from '../api';


function* getData() {
    let res = yield (Api.post('/bill/getbill', {
        user_name: 'laoyao'
    }));

    // 解构

    //支出账本
    let outcomelist = res[0].note.note_id_1.bill.outcome.list
    let outcomelists = {
        type: 'init_state_sync_outcomelist',
        payload: outcomelist
    }
    yield put(outcomelists)

    //获取本年支出
    // var today_year_outcome = outcomelist.reduce(function (prev, item) {
    //     return prev + Number(item.price);
    // }, 0);

    // let today_years_outcomelist = {
    //     type: 'init_state_sync_outcomelist_year',
    //     payload: today_year_outcome.toFixed(2)
    // }
    // yield put(today_years_outcomelist)

    // 本月支出

    // var num_month = outcomelist.reduce(function (prev, item) {
    //     if (item.month == 11) {
    //         return prev + Number(item.price);
    //     }
       
    // }, 0);

    // let today_month_outcomes = {
    //     type: 'init_state_sync_outcomelist_month',
    //     payload: num_month
    // }
    // yield put(today_month_outcomes)


    //收入账本
    let incomelist = res[0].note.note_id_1.bill.income.list
    let incomelists = {
        type: 'init_state_sync_incomelist',
        payload: incomelist
    }
    yield put(incomelists)






    //获取本年收入
    // var today_year_income = incomelist.reduce(function (prev, item) {
    //     return prev + Number(item.price);
    // }, 0);

    // let today_years_incomelist = {
    //     type: 'init_state_sync_incomelist_year',
    //     payload: today_year_income.toFixed(2)
    // }
    // yield put(today_years_incomelist)


}


function* rootSaga() {
    //  监听sagaAction，当dispatch({type:'CHANGE_QTY_ASYNC'})时，自动执行HelloSaga
    yield takeLatest('GET_DATA_ASYNC', getData);//takeLatest做了防抖
}

export default rootSaga;