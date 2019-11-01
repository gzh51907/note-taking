/**
 * 主页reducer
 */

let initialState = {
    selected: '/home',
    userlist: [],
    outcomelist: [],
    incomelist: "",
    income_year: 0.00,
    outcome_year:0.00,
    todayin: 0.00,
    todayout: 0.00


}

// Reducer：用于定义修改state方式，必须返回一个新的state
// 复制一份，并覆盖


function reducer(state = initialState, { type, payload }) {
    //在这里定义如何修改State
    // {type:'ADD_TO_CART',payload:{id,name,price,qty}}
    switch (type) {
        case "UPDATE_SELECTED":
            return {
                ...state,
                selected: payload
            }
        // 支出账单
        case "init_state_sync_outcomelist":
            return {
                ...state,
                outcomelist: payload
            }
        // 收入账单
        case "init_state_sync_incomelist":
            return {
                ...state,
                incomelist: payload
            }
        // 本年收入
        case "init_state_sync_incomelist_year":
            return {
                ...state,
                income_year: payload
            }
        case "init_state_sync_outcomelist_year":
            return {
                ...state,
                outcome_year: payload
            }
        default:
            return state;
    }
}


export default reducer;