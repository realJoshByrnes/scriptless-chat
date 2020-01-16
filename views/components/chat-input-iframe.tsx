var React = require('react');

function ChatInput(props) {
  const frameUrl = (props.hasCookie) ? '/chat/input' : `/chat/input?chatSessionId=${props.chatSessionId}`
  return (
    <iframe className="chat-input" src={frameUrl} />
  );
}

export default ChatInput;