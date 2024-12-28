import React, { useState, useEffect } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    function EditCustomer({ setCustomers }) {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const { id } = useParams();
      const navigate = useNavigate();

      useEffect(() => {
        const customer = customers.find((c) => c.id === parseInt(id));
        if (customer) {
          setName(customer.name);
          setEmail(customer.email);
        }
      }, [id, customers]);

      const handleSubmit = (e) => {
        e.preventDefault();
        setCustomers((prevCustomers) =>
          prevCustomers.map((c) =>
            c.id === parseInt(id) ? { ...c, name, email } : c
          )
        );
        navigate('/');
      };

      return (
        <div>
          <h2>Edit Customer</h2>
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
            <button type="submit">Update Customer</button>
          </form>
        </div>
      );
    }

    export default EditCustomer;
