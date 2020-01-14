import React from 'react';

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link href="/css/default.css" rel="stylesheet" />
        <link href="/css/chat-output.css" rel="stylesheet" />
        <title>{props.title}</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}

module.exports = DefaultLayout;