var React = require('react');
var DefaultLayout = require('./layouts/default');
import ChatOutput from './components/chat-output-iframe';

function Index(props) {
  return (
    <DefaultLayout title={props.title}>
      <ChatOutput />
    </DefaultLayout>
  );
}

export default Index;