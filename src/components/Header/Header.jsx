import React from 'react'
import './Header.less'
import {withRouter} from 'react-router-dom'

function Header(props) {
    let goBack = () =>{
        // 需要使用编程式导航
        console.log(props)
        // 返回上一层
        props.history.goBack();
    }
    return (
        <div className='common-header'>
            <i 
                className='iconfont icon-fanhui'
                onClick={goBack}
            ></i>
            <p>{props.title}</p>
        </div>
    )
}


export default withRouter(Header)