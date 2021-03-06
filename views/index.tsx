var React = require('react');
var DefaultLayout = require('./layouts/default');
import ChatOutput from './components/chat-output-iframe';
import ChatInput from './components/chat-input-iframe';

function Index(props) {
  return (
    <DefaultLayout title={props.title}>
      <ChatOutput chatSessionId={props.chatSessionId} />
      <ChatInput chatSessionId={props.chatSessionId} />
    </DefaultLayout>
  );
}

export default Index;