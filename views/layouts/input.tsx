import React from 'react';

function InputLayout(props) {
  return (
    <html>
      <head>
        <link href="/css/chat-input.css" rel="stylesheet" />
        <title>{props.title}</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}

module.exports = InputLayout;