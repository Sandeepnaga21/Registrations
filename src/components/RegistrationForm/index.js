import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: 'reqired',
    showLastNameError: 'reqired',
  }

  submitForm = event => {
    event.preventDefault()
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  render() {
    const {firstName, lastName, showFirstNameError, showLastNameError} =
      this.state

    if (firstName === '') {
      return showFirstNameError
    }

    if (lastName === '') {
      return showLastNameError
    }

    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <form className="card-container" onSubmit={this.submitForm}>
          <label htmlFor="first-Name">FIRST NAME</label>
          <input
            type="text"
            placeholder="First name"
            id="first-Name"
            onChange={this.onChangeFirstName}
          />
          <label htmlFor="last-Name">LAST NAME</label>
          <input
            type="text"
            placeholder="Last name"
            id="last-Name"
            onChange={this.onChangeLastName}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
