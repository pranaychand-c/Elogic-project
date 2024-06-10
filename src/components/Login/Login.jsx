import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slider from './Login.png'
export function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginData = {
      userId: userId,
      password: password,
    };
    console.log(JSON.stringify(loginData)); // Output JSON data
    navigate('/user-management'); // Navigate to user management page on login
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container bg-white p-5 rounded shadow">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center bg-primary">
            {/* Add the illustration image */}
            <img src= {slider} alt="Industrial IoT" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3 className="mb-2 text-center">Welcome to Industrial IoT Portal</h3>
            <p className='text-center'>Start automating your industry</p>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="userId" ></label>
               
                <input
                className="form-control"
                placeholder='Enter User-ID or E-mail'
                  type="text" 
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password"></label>
                <input
                placeholder='Enter Password'
                  type="password"
                  className="form-control bi bi-lock"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group form-check mb-3">
                <input type="checkbox" className="form-check-input" id="savePassword" />
                <label className="form-check-label" htmlFor="savePassword">Save Password</label>
              </div>
              <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
