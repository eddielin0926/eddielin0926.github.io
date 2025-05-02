import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { JSX } from 'react';
import Link from '@docusaurus/Link';

function Persona() {
  return (

    <div className={styles.person}>
      <div className={styles.personContainer}>
        <img
          className={styles.personCircle}
          src="/img/background.png"
          alt=""
        />
        <img
          className={styles.personImg}
          alt="Eddie Lin"
          src="/img/persona.png"
        />
      </div>
    </div>

  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroHeader)}>
      <div className="container">
        <div className='row'>
          <div className={clsx('col', styles.center)}>
            <div>
              <Heading as="h1" className="hero__title">
                Hi, I'm <span className={styles.heroName}>Eddie Lin</span>
              </Heading>
              <p className="hero__subtitle">
                Engineer. Learner. Builder of things that (hopefully) don't crash. Currently studying Information Networking at CMU.
              </p>
              <Link
                className="button button--primary button--outline"
                href="pathname:///resume.pdf">
                Resume
              </Link>
              <div className={styles.center}>
              </div>
            </div>
          </div>
          <div className={clsx('col', styles.center)}>
            <Persona />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
