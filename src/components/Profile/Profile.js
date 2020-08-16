import React from 'react';
import './Profile.css';
import foto from '../../sinatra.jpg';

function Profile() {
  return (
    <section className="App-profile">
      <h1>2L</h1>
      <img src={foto} className="App-profile-foto" alt="Foto" width="40" />
    </section>
  );
}

export default Profile;
