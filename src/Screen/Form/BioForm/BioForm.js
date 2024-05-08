import React, { Component } from 'react'
import '../MathForm/MathForm'
export class BioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      percentage: '',
      schoolName: '',
      yearOfPassout: '',
      gender: 'male', 
      fatherName: '',
      motherName: '',
      fatherOccupation: '',
      motherOccupation: '',
      subject: 'Biology ', 
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const data = JSON.stringify(this.state, null, 2);
    const filename = "Bio" + email + '.txt';

    const blob = new Blob([data], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  render() {
    return (
      <div className='formcontainer'>
        <h2>Biology Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email ID:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            10%:
            <input type="text" name="percentage" value={this.state.percentage} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            School Name:
            <input type="text" name="schoolName" value={this.state.schoolName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Year of Passout:
            <input type="text" name="yearOfPassout" value={this.state.yearOfPassout} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Gender:
            <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleChange} /> Male
            <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleChange} /> Female
          </label>
          <br />
          <label>
            Father Name:
            <input type="text" name="fatherName" value={this.state.fatherName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Mother Name:
            <input type="text" name="motherName" value={this.state.motherName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Father Occupation:
            <input type="text" name="fatherOccupation" value={this.state.fatherOccupation} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Mother Occupation:
            <input type="text" name="motherOccupation" value={this.state.motherOccupation} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Default Subject:
            <select name="subject" value={this.state.subject} onChange={this.handleChange} disabled>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}
export default BioForm
