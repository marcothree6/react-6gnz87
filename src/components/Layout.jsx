import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout(props) {
  return (
    <div>
      <Header />
      {/* afisam pe ecran copiii pe care Layout ii primeste la instantiere */}
      {props.children}
      <Footer />
    </div>
  );
}
