import {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function CreatePost (props) {
  
  let navigate = useNavigate()
  let initialPostValues = { 
    authorId: props.user.id, 
    cardId: '',
    report: '',
  }
  const [newPostValues, setNewPostValues] = useState(initialPostValues)

  const handlePostChange = (e) => {
    setNewPostValues({ ...newPostValues, [e.target.name]: e.target.value })
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${BASE_URL}/feed`, newPostValues, {
      headers: {
        'authorization': `Bearer ${props.token}`
      }
    })
    setNewPostValues(initialPostValues)
    props.setUseEffectToggler(!props.useEffectToggler)
    navigate('/feed')
  }

  return (
    <div className='createpostpage'>
      <form className="createpost" onSubmit={handlePostSubmit}>
          <div className="input-wrapper">
            <label htmlFor="cardId">cardId</label>
            <input
              onChange={handlePostChange}
              name="cardId"
              type="text"
              placeholder="Which Card?"
              value={newPostValues.cardId}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="report">What happened on this day?</label>
            <input
              onChange={handlePostChange}
              name="reports"
              type="text"
              placeholder="Was it in the cards?"
              value={newPostValues.report}
            />
          </div>

          {/* <div className="input-wrapper">
            <label htmlFor="location">Location</label>
            <input
              onChange={handlePostChange}
              type="text"
              name="location"
              value={newPostValues.location}
              required
            />
          </div> */}
          <button
          >
            Create Post
          </button>
        </form>
    </div>
  )
}