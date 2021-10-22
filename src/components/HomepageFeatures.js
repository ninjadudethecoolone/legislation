import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Supreme Guidelines',
    img: '../../static/img/judicial.png',
    description: (
      <>
        <i>(Coming soon)</i> View the Foundation's supreme guidelines.
      </>
    ),
  },
  {
    title: 'Departmental Guidelines',
    img: '../../static/img/scpf.png',
    description: (
      <>
        All public departmental guidelines are available to view here.
      </>
    ),
  },
  {
    title: 'Criminal Code',
    img: '../../static/img/judicial.png',
    description: (
      <>
        <i>(Coming soon)</i> View the Foundation's criminal code.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} alt={title} />
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
