const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 入口，入口可以有多个
    entry: './src/main.js',

    //出口（编译后文件处理）
    output: {
        // _dirname:拼接一个路径，保证路径不会出错
        path: path.join(__dirname, './dist'),
        // 输出的文件名，如果不设置该参数，则会跟入口文件名字一样
        //为防止浏览器缓存，所以加入hash生成随机的文件名
        //为防止入口文件多个，再添加一个[name]，让他的名字跟入口文件对于，好分别
        filename: 'bundle-[name]-[hash:5].js'
    },
    //测试服务器，编译打包后会消失
    devServer: {
        // 设置服务器根目录
        contentBase: path.join(__dirname, './src'),
        // 服务器运行成功，自动打开浏览器 
        open: true

    },
    // 加载器
    module: {
        rules: [{
            // 用正则匹配符合文件进入
            test: /\.jsx?$/,
            // 加载器，一个可以用对象，多个加载器用数组
            use: {
                // loader加载器的名字
                loader: "babel-loader",
                // 配置参数
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        // 按需加载antd
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": "css" // `style: true` 会加载 less 文件
                        }]
                    ]
                },
            },
            // 编译哪一个文件夹，指定后，可以提高编译的效率,resolve把路径变为绝对路径
            include: path.resolve(__dirname, './src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    // 插件
    plugins: [
        // 删除dist文件夹
        new CleanWebpackPlugin(),

        // 创建dist文件夹
        new HtmlWebpackPlugin({
            // - template:模板路径,基于template生成一个index.html文件
            //- filename:输出文件名（默认：index.html）
            //- title:设置html文件的title属性
            template: './src/template.html'
        })
    ]
}