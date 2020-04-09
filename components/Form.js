import React, { useState }from 'react';

export default function Form(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cit, setCit] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('puta')

  }

  const styles ={
    container:{
      padding:'2rem'
    }
  }

  return(
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Full Legal Name: 
          <input type="text" required value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Citizenship: 
          <input type="text" required value={cit} onChange={event => setCit(event.target.value)} />
        </label>
        <label>
          Date Of Birth: 
          <input type="text" required value={dob} onChange={event => setDob(event.target.value)} />
        </label>
        <label>
          Email: 
          <input type="email" required value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          Phone: 
          <input type="phone" required value={phone} onChange={event => setPhone(event.target.value)} />
        </label>
        <label>
          Service:
          <select>
            <option disabled selected value> -- Select An Option -- </option>
            <option value="worker">Worker</option>
            <option value="student">Student</option>
            <option value="sponsor">Sponsor</option>
            <option value="visitor">Visitor</option>
            <option value="express">Express Entry</option>
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}