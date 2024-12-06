import React, { useState } from 'react';

const TemporaryForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message, priceRange });
    onClose(); // Close the form after submission
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <span style={{ cursor: 'pointer', float: 'right', fontSize: '20px' }} onClick={onClose}>&times;</span>
        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Name:
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Email:
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Message:
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Price Range:
              <input 
                type="text" 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)} 
                placeholder="e.g., $100 - $500" 
                required 
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
              />
            </label>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ marginRight: '10px', padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white' }}>Apply</button>
            <button type="button" onClick={onClose} style={{ padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#dc3545', color: 'white' }}>Buy</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemporaryForm;