import React from 'react';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
//importam hook-ul useParams, de la React Router.
import { useParams } from 'react-router-dom';

export function User() {
  //extragem id-ul din obiectul returnat de hookul useParams
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    //cerem datele de la server, pt id-ul curent si actualizam serverul
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      });
    // Cand id-ul se schimba, cerem datele corespunzatoare.
  }, [id]);

  return (
    <div>
      <Layout>
        {/* afisam numele si emailul userului */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Layout>
    </div>
  );
}
