import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Header from '../../Component/Header/Header';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='form_btn_container'>
          <div>
            <h1>Please Select Your Stream.</h1>
          </div>
          <div>
            <Link to='/maths'>Maths</Link>
            <Link to='/bio'>Bio</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
