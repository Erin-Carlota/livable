// 格式化手机号
export function formatTel(tel){
    // 12345678900 -> 123****8900
    let start = tel.slice(0,3);
    let last = tel.slice(-4);
    return start + '****' + last
}