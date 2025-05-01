import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Distributed Systems Enthusiast',
    Svg: require('@site/static/img/undraw_cloud_hosting.svg').default,
    description: (
      <>
        I enjoy designing and implementing systems that are fault-tolerant, scalable, and elegant — from Raft to job schedulers.
      </>
    ),
  },
  {
    title: 'Full-Stack Developer',
    Svg: require('@site/static/img/undraw_building_blocks.svg').default,
    description: (
      <>
        From backend APIs to frontend UI, I care about architecture, performance, and developer experience across the stack.
      </>
    ),
  },
  {
    title: 'Side Project Explorer',
    Svg: require('@site/static/img/undraw_developer_activity.svg').default,
    description: (
      <>
        I love building tools and products in my spare time — from browser extensions to databases. Ideas are good, execution is better.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
