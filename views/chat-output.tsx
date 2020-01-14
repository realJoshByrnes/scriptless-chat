var React = require('react');
var DefaultLayout = require('./layouts/default');
import StartLiveStream from './components/startlivestream';

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title} id="chatFrame">
      <div id="ChatFrame">
        <div id="ChatItems">
          <span>This is a proof-of-concept from the team at <a href="https://webchat.ws/">webchat.ws</a>.<br /></span>
          <span>Messages should be loaded in real-time.<br /></span>
          <StartLiveStream />
          <div><span>If you're seeing this, something's broken!</span></div>
        </div>
      </div>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;