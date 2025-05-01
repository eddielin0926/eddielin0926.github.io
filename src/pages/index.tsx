import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <section className={clsx('hero', styles.heroBanner)}>
          <div className='container'>
            <h1>
              Hey there!, I'm <span>Eddie</span> 👋
            </h1>
            <p>
              Engineer. Learner. Builder of things that (hopefully) do't crash.<br />
              Currently studying Information Networking at CMU.
            </p>
          </div>
        </section>
        <section>
          <HomepageFeatures />
        </section>
      </main>
    </Layout>
  );
}
