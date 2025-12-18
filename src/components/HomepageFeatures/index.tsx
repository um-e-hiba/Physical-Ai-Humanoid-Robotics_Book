import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'The Robotic Nervous System (ROS 2)',
    Svg: require('@site/static/img/nervous_system.svg').default,
    description: (
      <>
        This module covers ROS 2 middleware for robot control, including nodes, topics, 
        and services, integrating Python agents with ROS, and understanding URDF for humanoid robots.
      </>
    ),
  },
  {
    title: 'The Digital Twin (Gazebo & Unity)',
    Svg: require('@site/static/img/gazebo.svg').default,
    description: (
      <>
        This module focuses on creating digital twins using Gazebo and Unity, covering physics simulation, 
        environment building, sensor simulation, and realistic rendering for human-robot interaction.
      </>
    ),
  },
  {
    title: 'The AI-Robot Brain (NVIDIA Isaac™)',
    Svg: require('@site/static/img/ai_brain.svg').default,
    description: (
      <>
        This module explores AI-powered robot intelligence using NVIDIA Isaac™, including realistic simulation, 
        synthetic data, VSLAM, navigation, and path planning for humanoids.
      </>
    ),
  },
  {
    title: 'Vision-Language-Action (VLA)',
    Svg: require('@site/static/img/VLA.svg').default,
    description: (
      <>
        This module integrates vision, language, and action by leveraging LLMs and speech recognition to enable 
        robots to understand commands, plan tasks, and interact autonomously. The capstone project features a 
        humanoid robot executing voice-guided tasks in a simulated environment.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
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

export default function HomepageFeatures(): ReactNode {
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
