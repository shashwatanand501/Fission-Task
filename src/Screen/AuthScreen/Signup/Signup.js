import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        password: '',
      },
      formErrors: {
        name: '',
        email: '',
        password: '',
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', this.state.formData);
  };

  render() {
    const { formData, formErrors } = this.state;
    return (
      <div className='Signup-container'>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter Your Name here"
              value={formData.name}
              onChange={this.handleInputChange}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="email@example.com"
              value={formData.email}
              onChange={this.handleInputChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={this.handleInputChange}
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
          </div>
          <button type="submit">Signup</button>
          <a href='/'>Already have an account? Login here</a>
        </form>
       
      </div>
    );
  }
}

export default Signup;
