import React,{useState,useRef} from 'react'
import './Item.less'

export default function Item({ele,index,changeCommentState}) {
    const myref = useRef();
    const [num,setNum] = useState(-1);
    // 控制评论区域的显示隐藏
    const [isShow,setIsShow] = useState(false);

    function pingStar(index){
        setNum(index)
    }

    // 点击评论按钮，显示评论区域
    let openPLbox =(state)=>{
        if(state === 0){
            console.log('要显示评论区域')
            setIsShow(true)
            // 要吧commentState设置成其他的值(只要不是0和2就行)
            changeCommentState(index,1)
        }
    }

    // 提交事件
    let submit=()=>{
        // 获取评论内容
        // 获取星星数据
        let conent = myref.current.value;
        console.log('评论内容是：'+conent +', 星星数：'+ (num+1));
        alert('评论成功');
        // 把提示文字变成 "已评论"
        changeCommentState(index,2);
        // 隐藏评论区域
        setIsShow(false)
    }

    //  取消
    let quxiao = () =>{
        // 把提示文字变成 "已评论"
        changeCommentState(index,0);
        // 隐藏评论区域
        setIsShow(false)
    }
    return (
        <div>
            <div className='shopcar-item-box'>
                <div className='pic'>
                    <img src={ele.img} alt=""/>
                </div>
                <div className='info'>
                    <p>商户:{ele.title}</p>
                    <p>类型:{ele.houseType}</p>
                    <p>价格:{ele.price}</p>
                </div>
                <div className='btnBox'>
                    <button
                        className={ele.commentState === 2 ? 'grey':''}
                        onClick={openPLbox.bind(null,ele.commentState)}
                    >{ele.commentState === 0 ? '评论': ele.commentState === 2 ? '已评论' : '评论中'}</button>
                </div>
            </div>
            <div style={{display: isShow?'block':'none' }}  className='hidden'>
                <textarea className='content' ref={myref}></textarea>
                <p>
                    {[1,1,1,1,1].map((ele,idx)=>(<i 
                        key={idx} 
                        className= {idx <= num ? 'iconfont icon-xingxing active' :'iconfont icon-xingxing'}
                        onClick={pingStar.bind(null,idx)}
                    ></i>))}
                </p>
                <button className='btn tj'
                    onClick={submit}
                >提交</button>
                <button className='btn' onClick={quxiao}>取消</button>
            </div>
        </div>
    )
}
