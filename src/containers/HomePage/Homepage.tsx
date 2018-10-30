import * as React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome to Slack Chat</title>
      <meta name="description" content="Slack Chats" />
    </Helmet>
    <main>
      <h2>testing From the Homepage</h2>
      <p>test</p>
    </main>
  </React.Fragment>
);

export default HomePage;
