import React from 'react';

function OutputLayout(props) {
  return (
    <html>
      <head>
        <link href="/css/chat-output.css" rel="stylesheet" />
        <title>{props.title}</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}

module.exports = OutputLayout;