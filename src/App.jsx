import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import CustomerList from './CustomerList';
    import AddCustomer from './AddCustomer';
    import EditCustomer from './EditCustomer';

    function App() {
      const [customers, setCustomers] = useState([]);

      return (
        <Router>
          <div className="container">
            <nav>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/add">Add Customer</Link></li>
                <li><Link to="/edit/1">Edit Customer</Link></li>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route path="/" element={<CustomerList customers={customers} />} />
                <Route path="/add" element={<AddCustomer setCustomers={setCustomers} />} />
                <Route path="/edit/:id" element={<EditCustomer setCustomers={setCustomers} />} />
              </Routes>
            </main>
            <aside>
              <h2>Team Information</h2>
              <p>John Doe - Developer</p>
              <p>Jane Smith - Designer</p>
              <div>
                <canvas id="chart" width="100%" height="200px"></canvas>
              </div>
            </aside>
          </div>
        </Router>
      );
    }

    export default App;
