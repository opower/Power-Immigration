import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';

const styles = {
  content : {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'50%',
    height:'35%'
  },
  button:{
    backgroundColor:'cadetblue',
    color:'white',
    width:30,
    float:'right',
    fontSize:15
  },
  submit:{
    color:'white',
    backgroundColor:'cadetblue',
    padding:'.9rem',
    borderRadius:'0%',
    fontSize:'.75rem'
  },
  input:{
    padding:'.9rem',
    width:'30%'
  }
};

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
    <Button onClick={openModal}>Open Modal</Button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={styles}
      contentLabel="Example Modal"
    >

      <Button style={styles.button} onClick={closeModal}><b>X</b></Button>
      <h2 style={{paddingTop:'2rem'}} ref={_subtitle => (subtitle = _subtitle)}>Sign Up For Our Newsletter!</h2>
      <p style={{marginTop:'3rem'}}>Stay up-to-date on current Canadian immigration news and services</p>
      <form onSubmit={emailSubmit}>
        <input style={styles.input} type='email' placeholder='email' name='email'label='email' variant='outlined' required onChange={event => setEmail(event.target.value)}/>
        <button style={styles.submit} type='submit'>SUBMIT</button>
      </form>
    </Modal>
  </div>
  );
}