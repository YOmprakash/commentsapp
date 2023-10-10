// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment, toggleLiked} = props
  const {id, name, comment, isLiked, date} = commentDetails

  const deleteComment = () => {
    onDeleteComment(id)
  }

  const toggleImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeButton = () => {
    toggleLiked(id)
  }

  const postedTime = formatDistanceToNow(date)

  return (
    <li className="list-item">
      <div className="name-container">
        <h1 className="name">{name}</h1>
        <p className="date">{postedTime}</p>
      </div>
      <p className="text">{comment}</p>
      <div className="button-container">
        <div className="like-container">
          <img src={toggleImage} alt="like" className="like" />
          <button
            className="like-button"
            type="button"
            onClick={onClickLikeButton}
          >
            Like
          </button>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={deleteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="hr" />
    </li>
  )
}

export default CommentItem
