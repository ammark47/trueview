import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { chatClient } from '../streamchat';

export const CustomerChat = () => {
    const chatToken = useSelector(state => state.firebase_user.customer_token);
    const user = useSelector(state => state.user);

    if (!user) return <Redirect to="/" />;

    chatClient.setUser(
        {
            id: 'super-disk-5',
            name: 'Super disk',
            image: 'https://getstream.io/random_svg/?id=super-disk-5&name=Super+disk'
        },
        chatToken,
    );

    const channel = chatClient.channel('messaging', 'godevs', {
        // add as many custom fields as you'd like
        image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
        name: 'Talk about Go',
    });



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

