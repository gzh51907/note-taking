/**
 * 主页reducer
 */

let initialState = {
    selected: '/home',
    userlist:[]
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
        default:
            return state;
    }
}


export default reducer;