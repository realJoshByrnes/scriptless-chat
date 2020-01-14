var React = require('react');

function ChatOutput(props) {
  return (
    <iframe className="chat-output" src="/chat/live/" />
  );
}

export default ChatOutput;