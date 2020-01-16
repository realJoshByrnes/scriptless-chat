var React = require('react');
var OutputLayout = require('./layouts/output');
import StartLiveStream from './components/startlivestream';

function ChatOutput(props) {
  return (
    <OutputLayout title={props.title} id="chatFrame">
      <div id="ChatNicklist">
        <div className="user">Sky</div>
        <div className="user">JD</div>
      </div>
      <div id="ChatFrame">
        <div id="ChatItems">
          <span>This is a proof-of-concept from the team at <a href="https://webchat.ws/">webchat.ws</a>.<br /></span>
          <span>Messages should be loaded in real-time.<br /></span>
          <StartLiveStream />
          <div><span>If you're seeing this, something's broken!</span></div>
        </div>
      </div>
    </OutputLayout>
  );
}

module.exports = ChatOutput;