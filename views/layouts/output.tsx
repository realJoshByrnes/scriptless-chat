import React from 'react';

function OutputLayout(props) {
  return (
    <html>
      <head>
        <link href="/css/chat-output.css" rel="stylesheet" />
        <title>WebChat.ws</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}

module.exports = OutputLayout;