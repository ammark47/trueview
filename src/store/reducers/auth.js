import { USER_PROFILE_LOADED, POSTGRES_PROFILE_LOADED } from '../actions/auth';
import { PURGE, REHYDRATE } from 'redux-persist';

const initialState = {
  user: {},
  loggedIn: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {  
      case USER_PROFILE_LOADED:
        return {
          ...state,
          user: action.user,
          loggedIn: true
        };
      case POSTGRES_PROFILE_LOADED:
        return {
          ...state,
          postgres_user: action.userInfoPostgres
        }
      case PURGE:
        return initialState
      default:
        return state;
    }
  }


