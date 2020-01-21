import { USER_PROFILE_LOADED } from '../actions/auth';

const initialState = {
  };

export default function authApp(state = initialState, action) {
    switch (action.type) {  
      case USER_PROFILE_LOADED:
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  }
