/**
 * 记一笔keep
 */
import {CHANGE_STATE_VALUE,CHANGE_STATE_PRICE,CHANGE_STATE_TITLE,CHANGE_STATE_WALLET,
CHANGE_STATE_MENUKEY,CHANGE_STATE_ALLTITLE} from '../action/keep';
let initialState = {
	value:'',
	price:'',
	wallet:'',
	title:'',
	menukey:'0',
	alltitle:{}
}

// Reducer：用于定义修改state方式，必须返回一个新的state
// 复制一份，并覆盖


function reducer(state = initialState, { type, payload }) {
    //在这里定义如何修改State
    // {type:'ADD_TO_CART',payload:{id,name,price,qty}}
    switch (type) {
		case "CHANGE_STATE_VALUE":
		    return {
				...state,
				value:payload
				}
		case "CHANGE_STATE_PRICE":
			return {
				...state,
				price:payload
				}
		case "CHANGE_STATE_TITLE":
			return {
				...state,
				title:payload
				}
		case "CHANGE_STATE_WALLET":
			return {
				...state,
				wallet:payload
				}
		case "CHANGE_STATE_MENUKEY":
			return {
				...state,
				menukey:payload
				}
		case "CHANGE_STATE_ALLTITLE":
		let alltitle=state.alltitle;
		Object.assign(alltitle,payload);
			return {
				...state,
				alltitle:alltitle 
				}		
        default:
            return state;
    }
}


export default reducer;