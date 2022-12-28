import React, {useRef, useState} from 'react';
import {Button, TextInput, View} from 'react-native';
const MessageInputComponent = () => {
  const [message, setMessage] = useState('');
  const sentMessage = useRef(0);

  const sendMessage = () => {
    if (sentMessage.current === 3) {
      return alert('Message Limit Reached');
    }

    sentMessage.current += 1;
    //code to handle sending message
  };

  return (
    <View>
      <TextInput onChange={e => setMessage(e.target.value)} value={message} />
      <Button onClick={sendMessage} title="send" />
    </View>
  );
};
export default MessageInputComponent;
