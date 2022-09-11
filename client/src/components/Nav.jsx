import {Link} from 'react-router-dom'

export default function Nav (props) {
return props.signedIn && props.user ? (
  <header>
  <nav className="nav">
    <ul className="mainnav">
    <img className="pronav" src={props.user.profileImg}/>
    <button className="logout icon" onClick={props.handleLogOut}>Log Out</button>
    <Link  to='/newpost'><button className="icon">New Post</button></Link>
    <Link to='/myprofile'><button className="icon">Profile</button></Link>
    <Link  to='/feed'><button className="icon">Feed</button></Link>
    </ul>
    <h1 className="welcome"> Welcome {props.user.username}</h1>
    
    
  </nav>
  </header>
) : null
}