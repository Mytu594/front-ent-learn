步骤：
         1. 创建项目文件夹 webpackdemo
         2. npm init -y  生成package.json
         3. 在安装webpack,wepback-cli
         在webpackdemo目录下 
         npm install webpack@5.73.0 webpack-cli@4.10.0 -D
         4. 在webpackdemo目录下  安装jquery （生产依赖）
         npm install jquery -S
         5. 创建index.html (ul ,li ,引入index.js)
            创建index.js （import jquery,设置背景颜色）
            【验证】直接打开index.html  报错 ---浏览器不支持import
         6. webpack打包
            npx webpack ./index.js    
            【验证】 多出一个dist目录->main.js
            修改index.html引入 改为main.js 再次打开 正确。

            除了npx，也可以作为脚本直接运行package.json配置scripts
            "xxx":"webpack ./index.js"
            运行 使用 npm run xxx
            【验证】 多出一个dist目录-》main.js
👸
        二：通过webpack.config.js进行打包
         1.  webpack.config.js
          module.exports={ 配置入口，出口}
         2. 打包命令
             "build": "webpack"
             或者
             npx webpack 
             【验证】 是否是配置的出口文件名称

        三、mode
         打包时，会有一个警告 , 需要设置时开发模式还是生产模式 
          mode: 'development'
          执行： npm run build

         四、插件 HtmlWebpackPlugin
         自动生成html文件，并自动引入输出的js
         4.1 安装插件
            npm install html-webpack-plugin@5.5.0 -D
         4.2 配置plugins
            new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html'
           })

          五、 loader配置- css配置
          webpack默认只认识js 和 json 文件。其他的不认识的。
          如果引入了css文件，打包时会报错 。"no loaders"
          解决： 
          安装
             npm install css-loader@6.7.1 style-loader@3.3.1 -D 
          配置loader
            //配置loader
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    }
                ]
            }

        七、 配置开发服务器
          1. 安装 npm install webpack-dev-server@4.10.0 -D
          2. 配置   
               devServer: {
                    //静态资源目录
                    static: {
                        directory: path.join(__dirname, 'dist'),
                    },
                    //是否压缩
                    compress: true,
                    //端口号
                    port: 9000,
             },
        3. 通过  webpack-dev-server   启动服务器
         "start": "webpack-dev-server  --config mywebpack.config.js"
         
         【验证】执行 npm run start ，
                浏览器中打开 [http://localhost:9000](http://localhost:9000)
                修改index.js文件内容，发现页面会自动更新，无需再npm run build了

        八、 配置html热更新
         1. index.js中引入html 
         2. 安装raw-loader
         3. 配置loader    
          {
                test: /\.(htm|html)$/,
                use: ['raw-loader']
         }  


        ⑨ 安装脚手架 （全局)  今天装好就可以了，后面不用。
        npm install -g @vue/cli

        创建vue项目
        vue create xxxx

        cd xxxx
        npm run serve
        浏览器打开  [http://localhost:8080/](http://localhost:8080/)  看到 vue 。



