import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: <>Supreme Guidelines <span class="badge badge--info">Coming soon</span></>,
    img: '/img/judicial.png',
    description: (
      <>
        View the Foundation's supreme guidelines.
      </>
    ),
  },
  {
    title: 'Departmental Guidelines',
    img: '/img/scpf.png',
    description: (
      <>
        All public departmental guidelines are available to view here.
      </>
    ),
  },
  {
    title: <>Criminal Code <span class="badge badge--info">Coming soon</span></>,
    img: '/img/judicial.png',
    description: (
      <>
        View the Foundation's criminal code.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" >
      <img src={img} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
