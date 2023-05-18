import React, {useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import {GoogleAnalyticsTracker} from "@site/src/utils/google-analytics";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/bots-api/welcome">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const gaTracker= new GoogleAnalyticsTracker(siteConfig.customFields.GOOGLE_TRACKING_ID);

  useEffect(() => {
      if (ExecutionEnvironment.canUseDOM) {
          document.querySelector('[href="https://help.viber.com"]')
              .addEventListener('click', () => {
                 gaTracker.supportButtonClick();
              });
          document.querySelector('a.navbar__brand').addEventListener('click', () => {
              gaTracker.logoButtonClick();
          });
      }
  })

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
