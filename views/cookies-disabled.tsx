var React = require('react');
var DefaultLayout = require('./layouts/default');
import ChatOutput from './components/chat-output-iframe';
import ChatInput from './components/chat-input-iframe';

function Index(props) {
  return (
    <DefaultLayout title="Cookie Warning">
      <div>
        <h1>Cookies disabled</h1>
        <span>
          You appear to have cookies disabled in your browser.<br />
          We recommend using cookies, as they allow us to store your preferences and session information<br /><br />
          You may continue without cookies, but please note:
          <ul>
            <li>Your preferences will not be saved</li>
            <li>Reloading this page will result in a new connection</li>
          </ul>
        </span>
        You may enable cookies and <a href={props.baseUrl}>retry</a>, or you may&nbsp;
        <form style={{display: "inline-block"}} method="post" action={props.baseUrl}>
          <input type="hidden" name="chatSessionId" value={props.chatSessionId} readOnly />
          <input type="submit" value="Continue" />
        </form> without cookies.
      </div>
    </DefaultLayout>
  );
}

export default Index;