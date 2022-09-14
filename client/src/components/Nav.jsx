import {Link} from 'react-router-dom'
import logout from '../assets/logout.png'
import drawacard from '../assets/drawacard.png'
import mycards from '../assets/mycards.png'
import feed from '../assets/feed.png'

export default function Nav (props) {
return props.signedIn && props.user ? (
  <header>
  <nav className="nav">
    <ul className="mainnav">
    <img className="pronav" src={props.user.profileImg}/>
    <img className="logout icon" onClick={props.handleLogOut} src={logout}/>
    <Link  to='/newpost'><img className="drawacard icon" src={drawacard}/></Link>
    <Link to='/myprofile'><img className="mycards icon" src={mycards}/></Link>
    <Link  to='/feed'><img className="feed icon" src={feed}/></Link>
    </ul>
    <h1 className="welcome"> Welcome {props.user.username}</h1>
    
    
  </nav>
  </header>
) : null
}