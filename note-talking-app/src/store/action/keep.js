export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';
export const CHANGE_STATE_PRICE = 'CHANGE_STATE_PRICE';
export const CHANGE_STATE_WALLET = 'CHANGE_STATE_WALLET';
export const CHANGE_STATE_TITLE = 'CHANGE_STATE_TITLE';
export const CHANGE_STATE_MENUKEY = 'CHANGE_STATE_MENUKEY';
export const CHANGE_STATE_ALLTITLE = 'CHANGE_STATE_ALLTITLE';
export const CHANGE_STATE_IMGURL = 'CHANGE_STATE_IMGURL';
function onChange(value){
    return {
        type:CHANGE_STATE_VALUE,
        payload:value
    }
}
function changePrice(price){
    return {
        type:CHANGE_STATE_PRICE,
        payload:price
    }
}
function changeTitle(title){
    return {
        type:CHANGE_STATE_TITLE,
        payload:title
    }
}
function changeWallet(wallet){
    return {
        type:CHANGE_STATE_WALLET,
        payload:wallet
    }
}
function changeMenuket(menukey){
    return {
        type:CHANGE_STATE_MENUKEY,
        payload:menukey
    }
}
function changeAlltitle(alltitle){
    return {
        type:CHANGE_STATE_ALLTITLE,
        payload:alltitle
    }
}
function changeImgurl(imgurl){
    return {
        type:CHANGE_STATE_IMGURL,
        payload:imgurl
    }
}
export default {
	onChange,
	changePrice,
	changeWallet,
	changeTitle,
	changeMenuket,
	changeAlltitle,
	changeImgurl
}