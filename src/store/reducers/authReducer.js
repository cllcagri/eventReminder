const initState = {
    authErr : null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("login success");
            return {
                ...state,
                authErr: null
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                authErr: 'Login failed.'
            };
        case "SIGNOUT_SUCCESS":
            console.log("signout success");
            return {
                ...state,
                authErr: null
            };
        case "SIGNOUT_ERROR":
            return {
                ...state,
                authErr: 'Signout failed.'
            };
        case "SIGNUP_SUCCESS":
            console.log("signup success");
            return {
                ...state,
                authErr: null
            };
        case "SIGNUP_ERROR":
            return {
                ...state,
                authErr: action.err.message
            };
        default:
            return state;
    }};

export default authReducer;