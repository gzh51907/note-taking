const { MongoClient } = require('mongodb');
const { DBurl, DBname } = require('../config.json')

async function conn() {
    //连接mongoDB
    // MongoClient.connect(DBurl, async function (err, client) {
    //     if (err) throw err;
    //     // 连接数据库，无则自动创建
    //     let db = client.db(DBname);
    //     // console.log(db)
    //     let col = db.collection('user');
    //     let result = await col.find().toArray()
    //     console.log(result);
    //     db.close();
    // });
    let result;
    try {
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBname);
        result = { client, db };
    } catch (err) {
        result = err
    }
    return result;
}

//查询
async function find(colName, query = {}) {
    let { db, client } = await conn();
    let col = db.collection(colName);
    let result = await col.find(query).toArray();
    client.close();
    // console.log(result)
    return result;
}
//聚合查询
async function aggregate(colName, query = []) {
    let { db, client } = await conn();
    let col = db.collection(colName);
    let result = await col.aggregate(query).toArray();
    client.close();
    return result;
}
// 创建
async function create(colName, data) {
    let { db, client } = await conn();
    let col = db.collection(colName);
    let result = await col.insert(data);
    client.close();
    return result;
}
/**
 * 改
 * @param {String} colName 
 * @param {Object} query 
 * @param {Object} data     需要修改的数据
 */
async function update(colName,query,data){
	console.log(data)
    let {db,client} = await conn();
    // 获取集合
    let col = db.collection(colName);
	// data='$set:{'+data+'}';
    let result = await col.updateMany(query,{$push:data});
    client.close();
    return result;
}
module.exports = {
    find,
    create,
	update,
	aggregate
} 