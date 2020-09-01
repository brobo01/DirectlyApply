import React from 'react'
  
class Register extends React.Component{
  state = {
    formData: {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
  }

// Function for text inputs 
handleChange = event => {
  const formData = { ...this.state.formData, [event.target.name]: event.target.value }
  const errors = { ...this.state.errors, [event.target.name]: '' }
  this.setState({ formData, errors  })
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
    if (!this.state.formData.reference) {
      errors['reference'] =  'Please let us know how you found us' 
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
      <div>
        <div className="header">
          
        </div>


        <div className="body">
          <div className="form">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="form-item">
                <label> Name: </label>
                <div className="form-input">
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  <div className="error-msg">
                    {errors.name && <small>{errors.name}</small>}
                  </div>
                </div>
              </div>
          
              <div className="form-item">
                <label> How did you find out about us? </label>
                <div className="form-input">
                  <select
                    name="reference"
                    onChange={this.handleChange}
                    className={errors.reference ? 'error' : ''}
                  >
                    <option value=""></option>
                    <option value="search-engine">Search Engine</option>
                    <option value="advert">Advert</option>
                    <option value="social-media">Social Media</option>
                  </select>
                  <div className="error-msg">
                    {errors.reference && <small>{errors.reference}</small>}
                  </div>
                </div>
              </div>

              <div className="form-item">
                <label> Email: </label>
                <div className="form-input">
                  <input type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={formData.email}
                    className={errors.email ? 'error' : ''}
                  />
                  <div className="error-msg">
                    {errors.email && <small>{errors.email}</small>}
                  </div>
                </div>
              </div>

              <div className="form-item">
                <label> Phone number: </label>
                <div className="form-input">
                  <input
                    type="text"
                    name="phone"
                    onChange={this.handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  <div className="error-msg">
                    {errors.phone && <small>{errors.phone}</small>}
                  </div>
                </div>
              </div>

              <div className="form-item">
                <label> Password: </label>
                <div className="form-input">
                  <input type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={formData.password}
                    className={errors.password ? 'error' : ''}
                  />
                  <div className="error-msg">
                    {errors.password && <small>{errors.password}</small>}
                  </div>
                </div>
              </div>

              <div className="form-item">
                <label> Confirm Password: </label>
                <div className="form-input">
                  <input type="password"
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                    value={formData.passwordConfirmation}
                    className={errors.passwordConfirmation ? 'error' : ''}
                  />
                  <div className="error-msg">
                    {errors.passwordConfirmation && <small>{errors.passwordConfirmation}</small>}
                  </div>
                </div>
              </div>
        
              <button
                type='submit'
                className="submit-btn"
              >SIGN UP</button>

            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Register

