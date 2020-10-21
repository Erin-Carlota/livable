import React,{useEffect,useState} from 'react';
import {getDetail} from '../../api/apiFn'
import DetailHead from '../../components/Header/Header'
import Swiper from '../../components/Swiper/Swiper'
import Tabs from '../../components/Tabs/Tabs';
import Item from './Item/Item';
import './Details.less'
import {connect} from 'react-redux'

function Details(props) {
    const [detail,setDetail] = useState({});
    const [isCollection,setIsCollection] = useState(false);
    useEffect(()=>{
        // 请求数据
        getDetail({id:props.match.params.id})
        .then(data=>{
            console.log(data)
            setDetail(data)
        });

        // 页面加载完成，从本地获取收藏的数据,
        let sclist = localStorage.getItem('goodlive-collection');
        if(sclist){
            // 如有数据，才需要判断，当前这条是否收藏过
            sclist = JSON.parse(sclist);
            if(sclist[props.match.params.id]){
                // 说明收藏过
                setIsCollection(true)
            }
        }
    },[]);


    // 点击收藏按钮的事件
    let shoucang = ()=>{
        // 1. 点击时判断用户是否登录了,需要从本地读取登录信息
        // let user = localStorage.getItem('goodlive-user')
        // 从redux中获取用户登录数据
        let user = props.user;
        if(user){
            // 登录过
            // 要执行收藏或者取消收藏
            // 先要取老数据
            let sclist = localStorage.getItem('goodlive-collection');
            if(!isCollection){
                let id = props.match.params.id;
                // 如果没收藏，需要执行收藏功能
                if(sclist){
                    sclist = JSON.parse(sclist);
                    // 向老数据中添加新数据
                    sclist[id] = 1;
                }else{
                    sclist = {}
                    sclist[id] = 1;
                }
                // 再次存储
                localStorage.setItem('goodlive-collection',JSON.stringify(sclist))
                // 把按钮上的文字修改成 "已收藏"
                setIsCollection(true)
            }else{
                // 取消收藏
                sclist = JSON.parse(sclist);
                // 把这条信息对应的id删除
                delete sclist[props.match.params.id];
                // 再次存储
                localStorage.setItem('goodlive-collection',JSON.stringify(sclist))
                // 把按钮上的文字修改成 "收藏"
                setIsCollection(false)
            }
        }else{
            // 没登录过,跳转到登录页面
            props.history.push('/login')
        }
    }
    return (
        <div className='details-box'>
            {/* 头部 */}
            <DetailHead title='详情页' />
            {/* 轮播图 */}
            <Swiper banners={detail.imgs ? detail.imgs : []} />
            {/* tab切换组件 */}
            <Tabs>
                <div tab='房屋信息'>
                    {detail.info ? <>
                        <h2>{detail.info.title}</h2>
                        <div className='info-box'>
                            <div>
                                <p>{detail.info.price}</p>
                                <p className='fontblod'>价钱</p>
                            </div>
                            <div>
                                <p>{detail.info.size}</p>
                                <p className='fontblod'>价钱</p>
                            </div>
                            <div>
                                <p>{detail.info.area}</p>
                                <p className='fontblod'>价钱</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>朝向：{detail.info.position}</p>
                                <p>层数：{detail.info.floor}</p>
                            </div>
                            <div>
                                <p>装修：{detail.info.zhuangxiu}</p>
                                <p>年份：{detail.info.year}</p>
                            </div>
                        </div>
                    </> : <div>数据正在请求中...</div>}
                </div>
                <div tab='评论信息'>
                    <Item id={props.match.params.id} />
                </div>
            </Tabs>

            <button className='btn sc' onClick={shoucang}>{isCollection?'已收藏':'收藏'}</button>
            <button className='btn buy'>购买</button>
        </div>
    )
}



export default connect((state)=>({user:state.user}))(Details)