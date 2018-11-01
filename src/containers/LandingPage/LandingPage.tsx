/**
 * LandingPage
 *
 * Landing page of the app
 *
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation/Navigation";
import { NavigationLinks } from "./navigation-links";

const LandingPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome to Slack Chat</title>
      <meta name="description" content="Slack Chat" />
    </Helmet>

    <main className="landing-page">
      <Navigation items={NavigationLinks} />
      <section className="landing-page__container">
        <h1 className="landing-page__hero-title">Slack Chat</h1>
      </section>
    </main>
  </React.Fragment>
);
export default LandingPage;
