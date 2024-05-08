import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../../AuthFile/Auth.json';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setLoginError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    const user = auth.find(user => user.id.EmailId === email && user.id.password === password);
    if (user) {
      setIsLoggedIn(true);
      navigate('/Dashboard');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className='Login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        {loginError && <div className="error">{loginError}</div>}
        <button type="submit">Login</button>
        <a href='/Signup'>Want New Account?</a>
      </form>
      <div className="important-msg">
        <p>
          For sign up, you need to create an API with a POST request. Currently, local storage is used for login.
        </p>
        <p>
          <strong>Email ID:</strong> fission@gmail.com<br />
          <strong>Password:</strong> Noida@@123##
        </p>
      </div>
    </div>
  );
}

export default Login;
