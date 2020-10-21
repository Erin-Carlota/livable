
function userReducer(state='',action){
    switch(action.type){
        case 'SETUSER':
            state = action.payload;
            return state;
        case 'LOGOUT':
            state = '';
            return state;
        default:
            return state;
    }
}

export default userReducer;