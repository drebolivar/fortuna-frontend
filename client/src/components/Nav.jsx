import { Link } from 'react-router-dom'
import logout from '../assets/logout.png'
import drawacard from '../assets/drawacard.png'
import mycards from '../assets/mycards.png'
import fortuna from '../assets/fortunalogo2.png'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Nav(props) {
  return props.signedIn && props.user ? (
    <header>
      <nav className="nav">
        <ul className="mainnav">
          {/* <img className="pronav" src={props.user.profileImg} /> */}
          <div className="navbuttons">
            <Link to="/newpost">
              <img className="drawacard icon" src={drawacard} />
            </Link>
            <img
              className="logout icon"
              onClick={props.handleLogOut}
              src={logout}
            />
            {/* <Link to="/myprofile">
              <img className="mycards icon" src={mycards} />
            </Link> */}
          </div>
          <Link to="/feed">
            <img className="fortuna" src={fortuna} />
          </Link>
        </ul>
      </nav>
    </header>
  ) : null
}
