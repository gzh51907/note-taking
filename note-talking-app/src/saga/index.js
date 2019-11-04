/**
 * Redux-Saga
    * Generator生成器函数
    * Iterator迭代器
        * next()        在yield返回结果后，saga在内部自定调用next()
 */

import { takeEvery, takeLatest, put, call, apply } from 'redux-saga/effects';
import Api from '../api';


function* getData() {
	let user= localStorage.getItem("user")
	let user_name=JSON.parse(user).user_name
    let res = yield (Api.post('/bill/getbill', {
        user_name: user_name
    }));
	// console.log("res",res[0].note.note_id_1.bill.income)
    // 解构

    //支出账本
	// console.log(res[0])
	if(res[0].note.note_id_1.bill.outcome){
    let outcomelist = res[0].note.note_id_1.bill.outcome.list
    let outcomelists = {
        type: 'init_state_sync_outcomelist',
        payload: outcomelist
    }
    yield put(outcomelists)
	}



    //收入账本
	if(res[0].note.note_id_1.bill.income){
		let incomelist = res[0].note.note_id_1.bill.income.list
		let incomelists = {
		    type: 'init_state_sync_incomelist',
		    payload: incomelist
		}
		yield put(incomelists)
	}
	// else{
	// 	incomelists=[]
	// }
   
 //    yield put(incomelists)

}


function* rootSaga() {
    //  监听sagaAction，当dispatch({type:'CHANGE_QTY_ASYNC'})时，自动执行HelloSaga
    yield takeLatest('GET_DATA_ASYNC', getData);//takeLatest做了防抖
}

export default rootSaga;