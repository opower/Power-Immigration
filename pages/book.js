import React from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Form from '../components/Form';

export default function Book(){

  return(
    <div>
      <NavMenu color={'cadetblue'}/>
      <Form/>
      <Footer/>
    </div>
  );
}