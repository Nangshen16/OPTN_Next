import React from 'react'
import { useState } from 'react';

const NumForm = () => {
    const [number, setNumber] = useState('');

    const handleChange =(e) => {
        setNumber(parseFloat(e.target.value));

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //this handle form submission here
        console.log('Submitted number:', number);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            XPub:
            <input type="number" value={XPub} onChange={handleChange}/>

        </label>
        <button type="submit">Submit</button>

    </form>
  )
}

export default NumForm;