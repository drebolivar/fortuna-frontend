import Comments from './Comments'
import CreateComment from './CreateComment'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import star from '../assets/star.png'
import deleteCard from '../assets/delete.png'

export default function PostCard(props) {
  let navigate = useNavigate()
  let [visible, setVisible] = useState(false)
  // let [numOfLikes, setNumOfLikes] = useState({numLikes: props.post.numLikes})
  // let [liked, setLiked] = useState(false)
  let [makeCommentVisible, setVisibleComment] = useState(false)

  const deletePost = () => {
    Client.delete(`${BASE_URL}/feed/${props.post.id}`)
    props.setUseEffectToggler(!props.useEffectToggler)
    navigate('/feed')
  }

  //toggles the visibility of the update post form
  const updatePost = () => {
    setVisible(!visible)
  }

  //toggles the visibility of the post comment form
  const showCommentForm = () => {
    setVisibleComment(!makeCommentVisible)
  }

  return props.post ? (
    <div>
      <div className="header-container">
        <h1>{props.post.Card.cardName}</h1>
        <div className="keywords">
          {props.post.Card.keywords.map((paragraph) => (
            <p> | {paragraph} |</p>
          ))}
        </div>
      </div>
      <div className="card-img-container">
        <img className="tarot-card" src={props.post.Card.cardImg} />
      </div>
      <div className="light-shadow">
        <div className="light">
          <p>
            <h3>Light: </h3>
            {props.post.Card.light.map((paragraph) => (
              <p> {paragraph}</p>
            ))}
          </p>
        </div>
        <div className="shadow">
          <p>
            <h3>Shadow:</h3>
            {props.post.Card.shadow.map((paragraph) => (
              <p> {paragraph}</p>
            ))}
          </p>
          {/* <p>Logged at: {props.post.Card.createdAt}</p> */}
        </div>
      </div>
      <div className="tellings-container">
        <p>
          <h4>Fortune:</h4>
          {props.post.Card.fortuneTelling.map((paragraph) => (
            <p> 🔮 {paragraph}</p>
          ))}
          <h4>Questions to ask yourself:</h4>
          {props.post.Card.questionsToAsk.map((paragraph) => (
            <p> 🔮 {paragraph}</p>
          ))}
        </p>
      </div>
      <div className="button-container">
        <img
          className="delete icon"
          src={deleteCard}
          onClick={deletePost}
          style={{
            display: props.post.authorId === props.user.id ? 'block' : 'none'
          }}
        />
        <img className="delete icon" src={star} onClick={showCommentForm} />
      </div>
      <CreateComment
        visible={makeCommentVisible}
        postId={props.post.id}
        userId={props.user.id}
        useEffectToggler={props.useEffectToggler}
        setUseEffectToggler={props.setUseEffectToggler}
      />
      <section className="card-text">
        {props.post.Comments.map((currentComment) => (
          <div className="comments" key={currentComment.id}>
            <Comments
              comment={currentComment}
              userId={props.user.id}
              useEffectToggler={props.useEffectToggler}
              setUseEffectToggler={props.setUseEffectToggler}
            />
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div>
      <p>Loading</p>
    </div>
  )
}
