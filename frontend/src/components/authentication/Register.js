import React from 'react'
import Select from 'react-select'
import Input from 'react-phone-number-input/input'


const options = [
  { value: 'search-engine', name: 'Search engine',  label: 'Search engine'  },
  { value: 'advert', name: 'Advert', label: 'Advert' },
  { value: 'social-media', name: 'Social Media', label: 'Social Media' }
]
  
class Register extends React.Component{
  state = {
    formData: {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {},
    reference: {}
  }

// Function for text inputs 
handleChange = event => {
  const formData = { ...this.state.formData, [event.target.name]: event.target.value }
  const errors = { ...this.state.errors, [event.target.name]: '' }
  this.setState({ formData, errors  })
}

// Fuction for list input
handleListChange = selected => {
  this.setState({ reference: selected.value })
}

// Function for submitting form. Function checks which fields haven't been filled in and turns them red
  handleSubmit = async event => {
    event.preventDefault()
    let errors = {}

    if (!this.state.formData.name) {
      errors['name'] =  'Please enter a name' 
    } 
    if (!this.state.formData.email) {
      errors['email'] =  'Please enter an email address' 
    } 
    if (!this.state.formData.phone) {
      errors['phone'] =  'Please enter a phone number' 
    } 
    if (!this.state.reference) {
      errors['reference'] =  'Please enter a phone number' 
    } 
    if (!this.state.formData.password) {
      errors['password'] =  'Please enter a password' 
    } 
    if (!this.state.formData.passwordConfirmation) {
      errors['passwordConfirmation'] =  'Please confirm your password' 
    } 

    if (this.state.formData.password !== this.state.formData.passwordConfirmation){
      errors = { ...this.state.errors, passwordConfirmation: 'Passwords do not match' }
    }
    this.setState({ errors })

    console.log(this.state)
  }



  render(){
    const { formData, errors } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name: </label>
        <input type="text"
          name="name"
          onChange={this.handleChange}
          className={errors.name ? 'error' : ''}

        />
          
        <label> How did you find out about us? </label>
        <Select
          name="reference"
          options={options} 
          onChange={this.handleListChange}
          className={errors.reference ? 'error' : ''}
        />
        <div className="error-msg">
          {errors.reference && <small>{errors.reference}</small>}
        </div>

        <label> Email: </label>
        <input type="email"
          name="email"
          onChange={this.handleChange}
          value={formData.email}
          className={errors.email ? 'error' : ''}
        />
        <div className="error-msg">
          {errors.email && <small>{errors.email}</small>}
        </div>

        <label> Phone number: </label>
        <Input
          name="[phone]"
          placeholder="Enter phone number"
          value={formData.number}
          onChange={this.handleListChange}
          className={errors.phone ? 'error' : ''}
        />
        <div className="error-msg">
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        <label> Password: </label>
        <input type="password"
          name="password"
          onChange={this.handleChange}
          value={formData.password}
          className={errors.password ? 'error' : ''}
        />
        <div className="error-msg">
          {errors.password && <small>{errors.password}</small>}
        </div>

        <label> Confirm Password: </label>
        <input type="password"
          name="passwordConfirmation"
          onChange={this.handleChange}
          value={formData.passwordConfirmation}
          className={errors.passwordConfirmation ? 'error' : ''}
        />
        <div className="error-msg">
          {errors.passwordConfirmation && <small>{errors.passwordConfirmation}</small>}
        </div>
        
        <button
          type='submit'
          className="submit-btn"
        >SIGN UP</button>

      </form>
    )
  }

}

export default Register

