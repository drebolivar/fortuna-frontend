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
            {/* <input
              onChange={handlePostChange}
              name="cardId"
              type="text"
              placeholder="Which Card?"
              value={newPostValues.cardId}
              required
            /> */}
            <select id="cardId"
            onChange={handlePostChange}
            name="cardId"
            value={newPostValues.cardId}>
              <option>Pick Your Card</option>
              <option value='1'>The Fool</option>
              <option value="2">The Magician</option>
              <option value="3">The High Priestess</option>
              <option value="4">The Empress</option>
              <option value="5">The Emperor</option>
              <option value="6">The Hierophant</option>
              <option value="7">The Lovers</option>
              <option value="8">The Chariot</option>
              <option value="9">Strength</option>
              <option value="10">The Hermit</option>
              <option value="11">Wheel of Fortune</option>
              <option value="12">Justice</option>
              <option value="13">The Hanged Man</option>
              <option value="14">Death</option>
              <option value="15">Temperance</option>
              <option value="16">The Devil</option>
              <option value="17">The Tower</option>
              <option value="18">The Star</option>
              <option value="19">The Moon</option>
              <option value="20">The Sun</option>
              <option value="21">Judgement</option>
              <option value="22">The World</option>
              <option value="23">Ace of Cups</option>
              <option value="24">Two of Cups</option>
              <option value="25">Three of Cups</option>
              <option value="26">Four of Cups</option>
              <option value="27">Five of Cups</option>
              <option value="28">Six of Cups</option>
              <option value="29">Seven of Cups</option>
              <option value="30">Eight of Cups</option>
              <option value="31">Nine of Cups</option>
              <option value="32">Ten of Cups</option>
              <option value="33">Page of Cups</option>
              <option value="34">Knight of Cups</option>
              <option value="35">Queen of Cups</option>
              <option value="36">King of Cups</option>
              <option value="37">Ace of Swords</option>
              <option value="38">Two of Swords</option>
              <option value="39">Three of Swords</option>
              <option value="40">Four of Swords</option>
              <option value="41">Five of Swords</option>
              <option value="42">Six of Swords</option>
              <option value="43">Seven of Swords</option>
              <option value="44">Eight of Swords</option>
              <option value="45">Nine of Swords</option>
              <option value="46">Ten of Swords</option>
              <option value="47">Page of Swords</option>
              <option value="48">Knight of Swords</option>
              <option value="49">Queen of Swords</option>
              <option value="50">King of Swords</option>
              <option value="51">Ace of Wands</option>
              <option value="52">Two of Wands</option>
              <option value="53">Three of Wands</option>
              <option value="54">Four of Wands</option>
              <option value="55">Five of Wands</option>
              <option value="56">Six of Wands</option>
              <option value="57">Seven of Wands</option>
              <option value="58">Eight of Wands</option>
              <option value="59">Nine of Wands</option>
              <option value="60">Ten of Wands</option>
              <option value="61">Page of Wands</option>
              <option value="62">Knight of Wands</option>
              <option value="63">Queen of Wands</option>
              <option value="64">King of Wands</option>
              <option value="65">Ace of Pentacles</option>
              <option value="66">Two of Pentacles</option>
              <option value="67">Three of Pentacles</option>
              <option value="68">Four of Pentacles</option>
              <option value="69">Five of Pentacles</option>
              <option value="70">Six of Pentacles</option>
              <option value="71">Seven of Pentacles</option>
              <option value="72">Eight of Pentacles</option>
              <option value="73">Nine of Pentacles</option>
              <option value="74">Ten of Pentacles</option>
              <option value="75">Page of Pentacles</option>
              <option value="76">Knight of Pentacles</option>
              <option value="77">Queen of Pentacles</option>
              <option value="78">King of Pentacles</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="report">What happened on this day?</label>
            <input
              onChange={handlePostChange}
              name="report"
              type="string"
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