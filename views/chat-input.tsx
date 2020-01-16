var React = require('react');
var Layout = require('./layouts/input.tsx');

function ChatInput(props) {
  return (
    <Layout title={props.title} id="chatInput">
      <form method="post" target="_self" autoComplete="off">
        <input name="_csrf" type="hidden" value="....." readOnly />
        <input className="input-box" name="data" type="text" value="" tabIndex="1" autoFocus />
        <input className="send-button" type="submit" value="send" />
      </form>
    </Layout>
  );
}

module.exports = ChatInput;