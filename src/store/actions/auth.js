export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const USER_LOGOUT = 'USER_LOGOUT'
export const POSTGRES_PROFILE_LOADED = 'POSTGRES_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';

export function handleAuthenticationCallback() {
  return {
    type: HANDLE_AUTHENTICATION_CALLBACK
  };
} 

export const userLogoutAction = () => {
  return {
    type: USER_LOGOUT
  }
} 


