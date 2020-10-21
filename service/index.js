let express = require('express');
let bodyParser = require('body-parser');
let Mock = require('mockjs');
let uuid = require('uuid');

let app = express();
app.use(bodyParser.urlencoded({ extended : false}));

// 轮播图的接口
app.get('/banner',(req,res)=>{
    return res.send({
        banners:['http://iwenwiki.com/api/livable/banner/banner1.png',
        'http://iwenwiki.com/api/livable/banner/banner2.png',
        'http://iwenwiki.com/api/livable/banner/banner3.png']
    })
});


// 新品推荐
app.get('/newproduct',(req,res)=>{
    // 需要携带城市数据
    let city = req.query.city;
    res.send(Mock.mock({
        'list|4':[
            {
                id:'@integer(123534)',
                word:'@cword(2,3)',
                title:function(){
                    return city + this.word
                },
                'img|+1':[
                    'http://iwenwiki.com/api/livable/homehot/img_aijiaodeng.png',
                    'http://iwenwiki.com/api/livable/homehot/img_baozhen.png',
                    'http://iwenwiki.com/api/livable/homehot/img_chuwugui.png',
                    'http://iwenwiki.com/api/livable/homehot/img_jingzi.png'
                ]
            }
            ]
        })
    )
})

// 热门推荐
app.get('/hotlist',(req,res)=>{
    // 需要携带城市数据 ? 问号形式携带数据
    let city = req.query.city;
    res.send(Mock.mock({
        'list|4':[
            {
                id:'@integer(123534)',
                word:'@cword(2,3)',
                title:function(){
                    return city + this.word
                },
                'img|+1':[
                    'http://iwenwiki.com/api/livable/homehot/img_zhiwujia.png',
                    'http://iwenwiki.com/api/livable/homehot/img_zhaoming.png',
                    'http://iwenwiki.com/api/livable/homehot/img_maojin.png',
                    'http://iwenwiki.com/api/livable/homehot/img_luodideng.png'
                ]
            }
            ]
        })
    )
});


// 热门城市接口
app.get('/hotcity',(req,res)=>{
    res.send({
        code:1,
        list:['北京','上海','广州','深圳','杭州','天津','西安','重庆','南京','武汉','成都']
    })
});


// 搜索列表
// get请求 restful数据
app.get('/list/:page/:city/:keyword',(req,res)=>{
    let page = req.params.page;
    let city = req.params.city;
    let keyword = req.params.keyword;
    res.send(Mock.mock({
        page,
        'list|5':[
            {
                'id':()=>{
                    return uuid.v4()
                },
                'word':'@cword(5,10)',
                title:function(){
                    return city + keyword + this.word 
                },
                'rtype|1':['整租','合租'],
                zong:'@integer(6,31)',
                cur:'@integer(1,31)',
                floor:function(){
                    if(this.zong >= this.cur){
                        return this.cur + '/'+this.zong;
                    }else{
                        return this.zong + '/'+this.cur;
                    }
                },
                'size|1':['一室一厅','两室一厅','三室两厅'],
                'area':()=>{
                    return (60+Math.random()*90).toFixed(2);
                },
                'price':'@integer(500,5000)',
                'img|+1':[
                    'http://iwenwiki.com/api/livable/search/1.jpg',
                    'http://iwenwiki.com/api/livable/search/2.JPG',
                    'http://iwenwiki.com/api/livable/search/3.jpg',
                    'http://iwenwiki.com/api/livable/search/4.JPG',
                    'http://iwenwiki.com/api/livable/search/5.jpg',
                    'http://iwenwiki.com/api/livable/search/6.jpg'
                ]
            }
        ]
    }))
});


// 详情数据
app.get('/detail',(req,res)=>{
    // 获取id
    let id = req.query.id;
    res.send(Mock.mock({
        id,
        imgs:['http://iwenwiki.com/api/livable/details/1.jpg',
        'http://iwenwiki.com/api/livable/details/2.jpg',
        'http://iwenwiki.com/api/livable/details/3.jpg',
        'http://iwenwiki.com/api/livable/details/4.jpg',
        'http://iwenwiki.com/api/livable/details/5.jpg',
        'http://iwenwiki.com/api/livable/details/6.jpg',
        'http://iwenwiki.com/api/livable/details/7.jpg',
        'http://iwenwiki.com/api/livable/details/8.jpg',
        'http://iwenwiki.com/api/livable/details/9.jpg',
        'http://iwenwiki.com/api/livable/details/10.jpg',
        'http://iwenwiki.com/api/livable/details/11.jpg',
        'http://iwenwiki.com/api/livable/details/12.jpg',
        'http://iwenwiki.com/api/livable/details/13.jpg'],
        info:{
            title:'@cword(5,10)',
            price:'@integer(500,5000)',
            'size|1':['一室一厅','两室一厅','三室两厅'],
            'area':()=>{
                return (60+Math.random()*90).toFixed(2);
            },
            zong:'@integer(6,31)',
            cur:'@integer(1,31)',
            floor:function(){
                if(this.zong >= this.cur){
                    return this.cur + '/'+this.zong;
                }else{
                    return this.zong + '/'+this.cur;
                }
            },
            'position|1':['朝北','朝南','朝东','朝西','南北通透'],
            year:'@integer(1970,2020)',
            'zhuangxiu|1':['毛坯','精装','简装','豪华']
        }

    }))
})


// 评论信息
app.get('/commit',(req,res)=>{
    let id = req.query.id;
    res.send(Mock.mock({
        id,
        'list|5':[
            {
                tel:/1\d{10}/,
                star:'@integer(1,5)',
                content:'@cword(10,50)'
            }
        ]
    }))
})

// 购物车数据
app.get('/comment', (req, res) => {
    let userid = req.query.userid;
    let page = req.query.page;
    res.send(Mock.mock({
        msg: 'success',
        page:page,
        nextPage:+page+1,
        userid:userid,
        'list|5': [{
            id: '@integer(1000000)',
            title: '@cword(7,15)',
            'houseType|1': ['1室1厅1卫 - 48m²', '2室1厅1卫 - 68m²', '3室1厅1卫 - 88m²', '4室2厅1卫 - 108m²'],
            price: '@integer(3000,200000)',
            'rentType|1': ['整租', '合租'],
            'commentState|1': [0, 2], //commentState 0没有评论过， 2代表评论过
            'img|1': ['http://iwenwiki.com/api/livable/shop/z1.jpg', 'http://iwenwiki.com/api/livable/shop/z2.jpg', 'http://iwenwiki.com/api/livable/shop/z3.jpg', 'http://iwenwiki.com/api/livable/shop/z4.jpg', 'http://iwenwiki.com/api/livable/shop/z5.jpg', 'http://iwenwiki.com/api/livable/shop/z6.jpg']
        }]
    }))
})

app.listen(4500,()=>{
    console.log(4500)
})