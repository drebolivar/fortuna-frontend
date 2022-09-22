import { useNavigate } from 'react-router-dom'
import fortunalogin from '../assets/fortunalogin.png'
// import fortuna from '../assets/fortunalogoedit.png'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="homepage">
      <div className="welcomescreen">
        {/* <img src={fortuna} /> */}
        <h2>Find Your Fortune!</h2>
        <h3>
          <a href="/signin">Sign in</a>
          <br></br>
          <a href="/register">Create an account</a>
        </h3>
        <img
          className="fortuneteller"
          src={fortunalogin}
          alt="fortune teller"
        />
      </div>
    </div>
  )
}

export default Home
