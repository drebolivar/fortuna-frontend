import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    userName: '',
    email: '',
    profileImg: '',
    zodiacSign: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      profileImg: formValues.profileImg,
      zodiacSign: formValues.zodiacSign,
      password: formValues.password
    })
    setFormValues({
      userName: '',
      email: '',
      profileImg: '',
      zodiacSign: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div className="registerpage">
      <div className="register">
        <h1>Register</h1>
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            <div>
              <label className="userName" htmlFor="userName">
                User Name:
              </label>
              <input
                className="userNameText"
                onChange={handleChange}
                name="userName"
                type="text"
                placeholder="User Name"
                value={formValues.userName}
                required
              />
            </div>
            <div>
              <label className="email" htmlFor="email">
                Email
              </label>
              <input
                className="emailText"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div>
              <label className="profileImg" htmlFor="profileImg">
                Profile Image Link:
              </label>
              <input
                className="profileImgText"
                onChange={handleChange}
                type="text"
                name="profileImg"
                value={formValues.profileImg}
                required
              />
            </div>
            <div>
              <label className="zodiacSign" htmlFor="zodiacSign">
                What's Your Zodiac Sign?:
              </label>
              <input
                className="zodiacSignText"
                onChange={handleChange}
                type="zodiacSign"
                name="zodiacSign"
                value={formValues.zodiacSign}
                required
              />
            </div>
            <div>
              <label className="password" htmlFor="password">
                Password
              </label>
              <input
                className="passwordText"
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <div>
              <label className="confirmPassword" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="passwordConfirmText"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>
            <div className="createAccount">
              <p>
                registered? <a href="/signin">Sign In</a>
              </p>
            </div>
            <button
              className="signupbutton"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
