import React from 'react'
import Header from '../../components/Header/Header'
import './City.less'
import HotCity from './HotCity/HotCity'
import {connect} from 'react-redux'
// 引入action
import setcity from '../../store/actions/city'

function City(props) {
    console.log(props)
    return (
        <div>
            {/* 放头部 */}
            <Header title='热门城市选择' />
            {/* 显示当前城市 */}
            <div className='curCity'>
                {/* 显示store中存储的城市 */}
                <p>当前城市:{props.city}</p>
            </div>

            {/* 热门城市 */}
            <HotCity history={props.history} setcity={props.setcity} />
        </div>
    )
}

function mapStateToProps(state){
    // 从store取存储到城市
    return {
        city:state.city
    }
}

function mapDispatchToProps(dispatch){
    return {
        setcity:(data)=>dispatch(setcity(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)