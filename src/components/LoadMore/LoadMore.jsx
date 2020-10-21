import React,{useRef,useEffect} from 'react'

export default function LoadMore(props) {
    const myref = useRef();
    let flag = true;
    // 使用didMount功能
    useEffect(()=>{
        // 把获取可视窗口高度放在myscroll外部，只获取一次就行
        let clientH = document.documentElement.clientHeight;
        function myscroll(){
            
            // 获取元素距离页面顶部高
            let offsetH = myref.current.offsetTop;
            
            // 获取页面滚动高度
            let scrollH = document.documentElement.scrollTop;

            // 加防抖功能:只让第一次触发，后面的都不触发了。
            if((scrollH+clientH >= offsetH) && flag){
                flag = false;
                // 调用用户传来的方法
                props.getListFn();
            }
            // console.log('滚动了')
        }
        // 绑定事件：绑定滚动事件
        window.addEventListener('scroll',myscroll);

        // return 相对unmount功能
        return ()=>{
            window.removeEventListener('scroll',myscroll)
        }
    });



    return (
        <div ref={myref}>
            加载更多
        </div>
    )
}
