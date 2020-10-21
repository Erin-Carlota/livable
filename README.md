# 技术栈
    react全家桶(react,react-router-dom,redux)
    express
    mockjs
    插件
    hook

# 环境搭建
    1. 安装基础环境 npx create-react-app projectname
    2. 安装路由 npm i react-router-dom
    3. 安装express,mockjs ， npm  i express mockjs -S
    4. 安装redux, npm i redux react-redux 
    5. 配置less、rem
        1. 配置less, 
            安装 less 和 less-loader
            运行eject,修改webpack.config.js配置文件
        2. 配置rem
            在html中添加一段js
    6. css初始化
        common.css / reset.css
        在index.js中添加 reset.css
    7. 字体图标
        下载字体图标
        在index.js中添加 iconfont.css       

# 路由
    - 首页，商城，生活服务，我的，城市选择，购物车，列表页面，详情页面，登录页面
    - 首页，商城，生活服务，我的 有底部导航
    
# 轮播图
    - 使用插件 react-swipeable-views
    - 安装 : npm i react-swipeable-views -S 
    - 使用：



# 跨域问题
    使用中间件形式解决
    npm i http-proxy-middleware -S 
    在src目录下创建 setupProxy.js，编写配置

# 城市选择
    - 从首页点击"城市"时，跳转到 城市选择 这个页面中
    - 头部(做成一个公共组件)
        返回键：点击时能返回到上一层路径
    - 显示当前城市
    - 热门城市
        - 点击那个城市，哪个城市就要被选中
        - 需要存储选中的城市(redux)
            (准备redux的store,reducer,action)
        - 关联redux


# 搜索功能
    - 首页搜索，能进入搜索的列表页
        按"回车键"时，可以跳转到列表页
    - 搜索列表页 , 能滚动到底部时加载更多
    - 搜索列表页 , 可以再次搜索
    - 搜索列表页 , 历史记录
    
## 提取公共组件
        Search组件

## uuid 插件
        作用：产生不重复的id值

# 详情页
    - 从哪能跳转到详情页：列表页跳转
    - 给List的Item组件添加跳转能
    - 在Details组件中获取id值，
    - 根据id值，请求具体的详情数据
    - tab组件
        <!-- tab项，点击那个就显示其对应的内容 -->
        <div>
            <div>tab1</div>
            <div>tab2</div>
            <div>tab3</div>
        </div>
        <!-- 对应tab的内容，只能显示其中某一项，其他的需要隐藏 -->
        <div>
            <div>tab1 content</div>
            <div>tab2 content</div>
            <div>tab3 content</div>
        </div> 
    
      封装成的组件使用方法：
        <Tabs>
            <div tab='tab1'>
                tab1 content
            </div>
            <div tab='tab2'>
                tab2 content
            </div>
        </Tabs>
      

# 收藏功能
    - 点击"收藏"时，首先判断用户是否登录，如果没有登录，需要先登录
        - 用户登录后也需要数据持久化(持久到本地)
    - 进入详情页时，当前这条的收藏状态需要显示 (已经收藏过的，显示"已收藏"；没有收藏过的显示"收藏")
        - 在本地存储收藏的数据
    - 点击"按钮"时，就要进行收藏或者取消收藏
    - 进行数据持久化(持久到本地)
