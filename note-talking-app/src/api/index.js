import axios from 'axios'
import qs from 'qs';

let Url = axios.create({
    baseURL:'http://localhost:2020/'
})

export async function get(path,params,config={}){
	let {data} = await Url.get(path,{
	    ...config,
	    params
	});
	return data;
}

export async function post(path,params,config={}){
	let {data} = await Url.post(path,qs.stringify({params}));
    return data;
}

export default {
    get,
    post
}