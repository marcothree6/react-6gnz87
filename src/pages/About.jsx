import React from 'react';
import { Layout } from '../components/Layout';

export function About() {
  return (
    <div>
      {/* instantiem Layout, dandu-i copii */}
      <Layout>
        {/* about nu va primi stilizarea din Home.modules.css, cu toate ca are acelai nume de clasa */}
        <h1 className="color">About</h1>
      </Layout>
    </div>
  );
}
