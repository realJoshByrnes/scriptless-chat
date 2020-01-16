var React = require('react');
var Layout = require('./layouts/input.tsx');

function InputSessionId(props) {
  if (props.chatSessionId) {
    return (
      <input name="chatSessionId" type="hidden" value={props.chatSessionId} readOnly />
    )
  }
  return null;
}

function ChatInput(props) {
  return (
    <Layout title={props.title} id="chatInput">
      <form method="post" target="_self" action={props.url} autoComplete="off">
        <input name="_csrf" type="hidden" value="....." readOnly />
        <InputSessionId chatSessionId={props.chatSessionId} />
        <input className="input-box" name="data" type="text" autoFocus />
        <input className="send-button" type="submit" value="Send" />
      </form>
    </Layout>
  );
}

module.exports = ChatInput;