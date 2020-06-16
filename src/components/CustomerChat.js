import React, { useState, useEffect } from "react";
import {
Chat,
Channel,
Thread,
Window,
ChannelList,
ChannelListTeam,
MessageList,
MessageTeam,
MessageInput,
ChatDown,
ChannelPreviewCompact,
ChannelPreviewMessenger,
ChannelPreview,
} from "stream-chat-react";
import { StreamChat } from "stream-chat"

import "stream-chat-react/dist/css/index.css"
import { useSelector } from "react-redux";
import chat from "store/reducers/chat";
import { useParams } from "react-router-dom";
import useFetch from "use-http";

const chatClient = new StreamChat("d2msy7mn26aa", "v65mjqbeq9axk6d69p2kd6mwr2hwg76tbu37dqbd2rve38jpja383d8m2ew5q3z8")

export const CustomerChat = () => {
    const [channel, setChannel] = useState({})
    const [loading, setLoading] = useState(false)
    const [channelId, setChannelId] = useState("")
    const user = useSelector(state => state.authReducer.postgres_user)
    const { customerId, reviewId } = useParams()

    const filters = { type: 'messaging', members: { $in: [user.chat_username] }, customer: user.chat_username };
    const sort = { last_message_at: -1 };

    useEffect(() => {
        const setCustomer = async () => {
            setLoading(true)

            // Set the current chat user
            await chatClient.setUser(
                {
                    id: user.chat_username,
                    name: user.name,
                    image: 'https://getstream.io/random_svg/?id=broken-cake-1&name=Broken+cake'
                },
                user.chat_token,
            )
            
            setLoading(false)
        }

        setCustomer()

        return () => chatClient.disconnect()
    }, [])

    const setActiveChannel = (channel) => {
        setChannel(channel)
    }


    return (
        <>
            {loading && <div>Loading chat...</div>}
            {!loading && 
                (<Chat client={chatClient} theme="messaging light" >
                    <ChannelList
                        Preview={ChannelPreviewCompact}
                        filters={filters}
                        sort={sort}
                        setActiveChannel={setActiveChannel}
                    >
                    </ChannelList>
                    <Channel channel={channel}>
                        <Window>
                            <MessageList Message={MessageTeam} />
                            <MessageInput focus />
                        </Window>
                        <Thread Message={MessageTeam} />
                    </Channel>
                </Chat>
                )
            }
        </>
    )

}