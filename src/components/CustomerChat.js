import React, { useState, useEffect } from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window, ChannelList } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


export const CustomerChat = () => {
    const user = useSelector(state => state.firebase_user)
    const [channels, setChannels] = useState({})
    const chatClient = new StreamChat('bwkz679bfvdm');

    useEffect(() => {
        fetch('/chat/disable-auth')
        .then(res => console.log(res))
    }, [])

    
    chatClient.setUser(
        {
            id: user.profile.nickname,
            name: user.profile.nickname,
            image: 'https://getstream.io/random_svg/?id=broken-cake-1&name=Broken+cake'
        },
        user.chatToken,
    );

    const filters = { type: 'messaging', members: { $in: [user.profile.nickname] } };
    const sort = { last_message_at: -1 };

    const channel = chatClient.channel('messaging', 'godevs', {
        // add as many custom fields as you'd like
        image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
        name: 'Talk about Go',
      });


    return (
        <Chat client={chatClient} theme={'messaging light'}>
            <ChannelList
                filters={filters}
                sort={sort}
            />
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

