export const HANDLE_SET_CHAT_USER_CALLBACK = 'SET_CHAT_USER';
export const SET_CHAT_USER_SUCCESS = 'SET_CHAT_USER_SUCCESS';
export const SET_CHAT_USER_REQUEST = 'SET_CHAT_USER_REQUEST';
export const SET_CHAT_USER_FAILURE = 'SET_CHAT_USER_FAILURE';

export const HANDLE_SET_CHAT_CLIENT_CALLBACK = 'HANDLE_SET_CHAT_CLIENT_CALLBACK';
export const SET_CHAT_CLIENT = 'SET_CHAT_CLIENT';

export function handleSetChatUser(payload) {
  return {
    type: HANDLE_SET_CHAT_USER_CALLBACK,
    payload: payload
  }
}

export function handleSetChatClient() {
  return {
    type: HANDLE_SET_CHAT_CLIENT_CALLBACK
  }
}