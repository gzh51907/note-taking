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




    let actions = {
        type: 'init_state_sync',
        payload: res[0]
    }

    // 提交这个actions 到store里面，和在reducer里面提交是一样的
    yield put(actions)

}

function* rootSaga() {
    //  监听sagaAction，当dispatch({type:'CHANGE_QTY_ASYNC'})时，自动执行HelloSaga
    yield takeLatest('GET_DATA_ASYNC', getData);//takeLatest做了防抖
}

export default rootSaga;