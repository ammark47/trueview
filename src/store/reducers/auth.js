import { USER_PROFILE_LOADED, POSTGRES_PROFILE_LOADED } from '../actions/auth';

const initialState = {
  };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {  
      case USER_PROFILE_LOADED:
        return {
          ...state,
          user: action.user
        };
      case POSTGRES_PROFILE_LOADED:
        return {
          ...state,
          postgres_user: action.userInfoPostgres
        }
      default:
        return state;
    }
  }


