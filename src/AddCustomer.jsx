import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function AddCustomer({ setCustomers }) {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = {
          id: Date.now(),
          name,
          email
        };
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
        navigate('/');
      };

      return (
        <div>
          <h2>Add Customer</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Add Customer</button>
          </form>
        </div>
      );
    }

    export default AddCustomer;
