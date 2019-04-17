import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions";

const initialState = {
    loggingIn: false,
    error: null,
}


export const howToReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {

        //login reducers
        case LOGIN_START: 
            return{ 
                ...state,
                error: '',
                fetchingHowTos: false, 
                loggingIn: true, 
            }
        
        case LOGIN_SUCCESS: 
            return{
                ...state, 
                error: '',
                loggingIn: false, 
            }
        
        case LOGIN_FAILURE:
            return{ 
                ...state, 
                error: '',
                loggingIn: false,
            }
    }
}