import React from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

export default function Service(){

  return(
    <div>
      <NavMenu color={'#7be3d2'}/>
      <h2>Worker</h2>
      <h2>Student</h2>
      <h2>Sponsor</h2>
      <h2>Visitor</h2>
      <h2>Express</h2>
      <Footer/>
    </div>
  );
}