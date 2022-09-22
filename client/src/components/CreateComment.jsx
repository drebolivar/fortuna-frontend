import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import enter from '../assets/enter.png'

export default function CreateComment(props) {
  let navigate = useNavigate()
  let initialCommentValues = {
    userId: props.userId,
    postId: props.postId,
    comment: '',
    numLikes: 0
  }
  const [newCommentValues, setNewCommentValues] = useState(initialCommentValues)

  const handleCommentChange = (e) => {
    setNewCommentValues({
      ...newCommentValues,
      [e.target.name]: e.target.value
    })
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    let res = await Client.post(`${BASE_URL}/comment`, newCommentValues)
    setNewCommentValues(initialCommentValues)
    props.setUseEffectToggler(!props.useEffectToggler)
    navigate('/feed')
  }

  return (
    <div style={{ display: props.visible ? 'block' : 'none' }}>
      <form className="col" onSubmit={handleCommentSubmit}>
        <div className="input-wrapper">
          <label htmlFor="comment"></label>
          <textarea
            onChange={handleCommentChange}
            name="comment"
            type="text"
            cols="50"
            rows="10"
            placeholder="Was it in the cards?"
            value={newCommentValues.comment}
            required
          />
        </div>
        <div className="postcomment-container">
          <button className="likes">Enter</button>
        </div>
      </form>
    </div>
  )
}
