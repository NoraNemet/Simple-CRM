import React from 'react';
    import { Link } from 'react-router-dom';

    function CustomerList({ customers }) {
      return (
        <div>
          <h2>Customer List</h2>
          <ul>
            {customers.map((customer) => (
              <li key={customer.id}>
                <Link to={`/edit/${customer.id}`}>{customer.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default CustomerList;
