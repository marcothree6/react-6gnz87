import React from 'react';
import { Layout } from '../components/Layout';
//importam stilurile din modulul de CSS
import styles from './Home.module.css';

export function Home() {
  return (
    <div>
      {/* instantiem Layout, dandu-i copii */}
      <Layout>
        {/* utilizam clasa color, din modulul de CSS */}
        <h1 className={styles.color}>Home</h1>
      </Layout>
    </div>
  );
}
