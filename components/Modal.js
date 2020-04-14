import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';

const styles = {
  content : {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'50%',
    height:'25%'
  },
  button:{
    backgroundColor:'cadetblue',
    color:'white',
    padding:'.4rem',
    width:45,
    float:'right',
    fontSize:15
  },
  submit:{
    padding:'1.5rem'
  }
};

// Modal.setAppElement('#yourAppElement')

export default function ModalComp(){
  let subtitle;
  const [email, setEmail] = useState()

  const emailSubmit = (event) => {
    event.preventDefault();
    console.log(email)
  }

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return(
    <div>
    <button onClick={openModal}>Open Modal</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={styles}
      contentLabel="Example Modal"
    >

      <button style={styles.button} onClick={closeModal}><b>X</b></button>
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Sign Up For Our Newsletter!</h2>
      <p>Stay up-to-date on current Canadian immigration news and services</p>
      <form onSubmit={emailSubmit}>
        <TextField type='email' name='email'label='email' variant='outlined' required onChange={event => setEmail(event.target.value)}/>
        <button style={styles.submit} type='submit'>Submit</button>
      </form>
    </Modal>
  </div>
  );
}