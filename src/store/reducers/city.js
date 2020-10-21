
function cityReducer(state='杭州',action){
    switch(action.type){
        case 'SETCITY':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default cityReducer;