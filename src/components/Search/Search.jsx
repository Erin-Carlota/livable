import React,{useState,useEffect} from 'react'
import './Search.less'
import {withRouter} from 'react-router-dom'

function Search(props) {
    const [keyword,setKeyword] = useState('');
    // 组件加载完成就需要设置keyword
    useEffect(()=>{
        if(props.match.params.keyword){
            setKeyword(props.match.params.keyword)
        }
        // [props.match.params.keyword] 搜索关键字改变后才能更新keyword
    },[props.match.params.keyword])
    let {type} = props;
    let tolist = (e)=>{
        // 1. 能获取到用户输入的数据
        // console.log(e.currentTarget.value)
        // 2. 能监听按到回车键
        if(e.keyCode == 13){
            // console.log('按到回车键了');
            props.history.push('/list/'+e.currentTarget.value)
        }
    }

    return (
        <div className='search-box' style={{borderRadius:type === 'round'? '4px':'19px'}}>
            <i className='iconfont icon-sousuo ss'></i>
            <input 
                type="text" 
                placeholder='请输入要搜索的关键字' 
                // Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`
                value={keyword}
                onChange={(e)=>setKeyword(e.currentTarget.value)}
                // 需要绑定键盘事件
                onKeyUp={tolist}
            />
        </div>
    )
}


export default withRouter(Search)