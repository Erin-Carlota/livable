import React, { Component } from 'react'
import MyNav from '../../components/MyNav/MyNav'
import HomeHeader from './HomeHeader/HomeHeader'
import Swiper from '../../components/Swiper/Swiper'
import {base,banner} from '../../api/index'
import Product from './Product/Product'
import {getNewProduct , getHotProduct} from '../../api/apiFn'
import {connect} from 'react-redux'
 
class Home extends Component {
    state = {
        list:[],
        newProductlist:[],
        hotlist:[]
    }
    componentDidMount(){
        fetch(base+banner)
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            this.setState({
                list:data.banners
            })
        })
        // 新品推荐,根据选中的城市请求数据
        getNewProduct({city:this.props.city}).then(data=>{
            console.log(data)
            this.setState({
                newProductlist:data.list
            })
        })

        // 热门推荐数据
        getHotProduct({city:this.props.city}).then(data=>{
            console.log(data)
            this.setState({
                hotlist:data.list
            })
        })
 
    }
    render() {
        return (
            <div style={{paddingBottom:'53px',height:'1000px'}}>
                {/* 头部 */}
                <HomeHeader city={this.props.city} />
                {/* 轮播图 */}
                <Swiper banners={this.state.list} />
                {/* 新品推荐 */}
                <Product title='新品推荐' list={this.state.newProductlist} />
                {/* 热门推荐 */}
                <Product title='热门推荐' list={this.state.hotlist} />
                {/* 底部导航 */}
                <MyNav />
            </div>
        )
    }
}

function mapStateToProps(state){
    // 从store取存储到城市
    return {
        city:state.city
    }
}

export default connect(mapStateToProps)(Home)