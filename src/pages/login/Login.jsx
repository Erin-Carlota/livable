import React ,{ useState } from 'react'
import './Login.less'
import {connect} from 'react-redux'
import setuser from '../../store/actions/user'

function Login(props) {
    const [user,setUser] = useState('');
    function loginfn(){
        // 存储到redux
        props.setuser(user);
        // 用户登录后也需要数据持久化(持久到本地)
        localStorage.setItem('goodlive-user',user);
        // 返回上一层路径
        props.history.goBack();
    }
    return (
        <div className='login-box'>
            <div className='uname'>
                <i className='iconfont icon-ai-phone'></i>
                <input type="text"
                 placeholder='用户名或手机号'
                 value={user}
                 onChange={(e)=>setUser(e.currentTarget.value)}
                 />
            </div>
            <div className='passwd'>
                <i className='iconfont icon-mima'></i>
                <input type="text" placeholder='请输入验证码' />
                <span>发送验证码</span>
            </div>
            <button className='login-btn'
                onClick={loginfn}
            >登  录</button>
        </div>
    )
}


export default connect(null,(dispatch)=>({
    setuser:(data)=>dispatch(setuser(data))
}))(Login)
