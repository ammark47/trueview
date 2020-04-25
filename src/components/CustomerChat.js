import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { chatClient } from '../streamchat';

const chatClient = new StreamChat('bwkz679bfvdm');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYnJva2VuLWNha2UtMSJ9.lcB25bd74yDN8wct9629IsT5_z0Lkrw-3eXl0EM9GVQ';

chatClient.setUser(
  {
    id: 'broken-cake-1',
    name: 'Broken cake',
    image: 'https://getstream.io/random_svg/?id=broken-cake-1&name=Broken+cake'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
    // add as many custom fields as you'd like
    image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
    name: 'Talk about Go',
  });

export const CustomerChat = () => {
    return (
        <Chat client={chatClient} theme={'messaging light'}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    )
}

