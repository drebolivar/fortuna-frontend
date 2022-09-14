import { useNavigate } from 'react-router-dom'
// import fortunalogin from '../assets/fortunalogin.png'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="homepage">
      <div className="welcomescreen">
        <h2>Find Your Fortune!</h2>
        {/* <img src={fortunalogin} alt="fortune teller" /> */}
        <h3>
          <a href="/signin">Sign in</a>
        </h3>
        <h3>
          <a href="/register">Create an account</a>
        </h3>
      </div>
    </div>
  )
}

export default Home
