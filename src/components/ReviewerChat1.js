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

const chatClient = new StreamChat("d2msy7mn26aa")

export const ReviewerChat = () => {
    const [channel, setChannel] = useState({})
    const [loading, setLoading] = useState(false)
    const [channelId, setChannelId] = useState("")
    const user = useSelector(state => state.authReducer.postgres_user)
    const { customerId, reviewId } = useParams()

    const filters = { type: 'messaging', members: { $in: [user.chat_username] }, reviewer: user.chat_username };
    const sort = { last_message_at: -1 };

    useEffect(() => {
        const getChannel = async () => {
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
            
            // if customerid and reviewid are passed as url params
            // get the status of the chat i.e. is is active?
            // if yes, get and set the corresponding chat channel
            if (customerId && reviewId) {
                const resChannelStatus = await fetch(`/db/chat/status/${user.id}/${customerId}/${reviewId}`)
                const { status: channelStatus } = await resChannelStatus.json()

                if (channelStatus === 'ACTIVE') {
                    // Get Customer's chat username and create a channel
                    const resCustomerChatname = await fetch(`/db/users/${customerId}/chat-name`)
                    const { chat_username: customerChatname } = await resCustomerChatname.json()

                    const channel = await chatClient.channel(
                        'messaging', 
                        `${user.id}-${customerId}-${reviewId}`,
                        { 
                            members: [ user.chat_username, customerChatname ],
                            status: 'ACTIVE',
                            customer: customerChatname,
                            reviewer: user.chat_username
                        }
                    )
                    console.log(channel)
                    await channel.create()
                    setChannel(channel)
                    setChannelId(channel.cid)
                }
            }
            setLoading(false)
        }

        getChannel()

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
                        customActiveChannel={channelId}
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