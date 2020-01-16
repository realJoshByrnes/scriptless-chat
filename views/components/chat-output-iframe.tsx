var React = require('react');

function ChatOutput(props) {
  const frameUrl = (props.chatSessionId) ? '/chat/live/output' : `/chat/live/output?chatSessionId=${props.chatSessionId}`
  return (
    <iframe className="chat-output" src={frameUrl} />
  );
}

export default ChatOutput;