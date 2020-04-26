import { StreamChat } from 'stream-chat';


const chatClient = new StreamChat('bwkz679bfvdm');

export const createDevToken = (userNickName) => {
    return chatClient.devToken(userNickName);
}