import Comments from "./Comments"
import CreateComment from "./CreateComment"
import Client from "../services/api"
import { BASE_URL } from "../services/api"
import UpdatePost from "./UpdatePost"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function PostCard (props) {

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

  //handles the like post button (still a work in progress)
  // const updateLikes = () => {
  //   let likes = props.post.numLikes
    // liked ? likes++ : likes--
    // console.log(likes)
    // console.log(liked)
  //   likes++
  //   setNumOfLikes({numLikes: likes})
  //   let res = Client.put(`${BASE_URL}/feed/${props.post.id}`, numOfLikes)
  //   setLiked(!liked)
  //   console.log(likes)
  //   console.log(numOfLikes)
  //   props.setUseEffectToggler(!props.useEffectToggler) 
  //   navigate('/feed')
  // }

  return props.post ? (
    <div>
      <div className="header-img-container">
        <img src={props.post.User.profileImg} alt='profilepic' className='profilepic'/>
        <h2 className='usernamefeed' style={{display: 'inline'}}>{props.post.User.userName}</h2>
      </div>
      <div className="card-img-container">
      <img src={props.post.Card.cardImg}/>
      <div className="fortune-contrainer">
      <p>Card: <br></br>{props.post.Card.cardName}</p>
      <p>Fortune: <br></br>{props.post.Card.fortuneTelling}</p>
      <p>Keywords:<br></br> {props.post.Card.keywords}</p>
      <p>Light: <br></br>{props.post.Card.light}</p>
      <p>Shadow: <br></br>{props.post.Card.shadow}</p>
      <p>Questions to ask yourself: <br></br>{props.post.Card.questionsToAsk}</p>
      </div>
      </div>
      <div className="report-container">
        <p className='caption'>{props.post.report}</p>
        </div>
      <div className="button-container">
        <button className="likes"onClick={deletePost} style= {{display: props.post.authorId === props.user.id ? 'block' : 'none'}}>Delete</button>
        <button className="likes"src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" onClick={updatePost} style= {{display: props.post.authorId === props.user.id ? 'block' : 'none'}}>Update Post</button>
        <button className="likes" onClick={showCommentForm}>Comment</button>
      </div>
      <UpdatePost post={props.post} visible={visible} setVisible={setVisible}/>
      <CreateComment  visible={makeCommentVisible} postId={props.post.id} userId={props.user.id} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
      <section className="card-text">
        {props.post.Comments.map((currentComment) => (
          <div className="comments" key={currentComment.id}>
            <Comments comment={currentComment} userId={props.user.id} useEffectToggler={props.useEffectToggler} setUseEffectToggler={props.setUseEffectToggler}/>
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