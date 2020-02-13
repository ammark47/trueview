import { connect } from 'react-redux';
import CustomerChat from '../components/CustomerChat';
import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import CustomerChat from '../components/CustomerChat';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('bwkz679bfvdm');
const userToken = client.devToken('bob')

chatClient.setUser(
  {
       id: 'super-disk-5',
       name: 'Super disk',
       image: 'https://getstream.io/random_svg/?id=super-disk-5&name=Super+disk'
  },
  userToken,
);  

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const CustomerChatContainer = connect(mapStateToProps)(CustomerChat);

export default CustomerChatContainer;