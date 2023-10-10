import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {nameInput: '', text: '', commentList: []}

  onChangeInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {text, nameInput} = this.state

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: text,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
    }))
  }

  toggleLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state

    const filterList = commentsList.filter(each => each.id !== id)

    this.setState({commentsList: filterList})
  }

  renderComments = () => {
    const {commentList} = this.state
    return commentList.map(each => (
      <CommentItem
        key={each.id}
        commentDetails={each}
        onDeleteComment={this.onDeleteComment}
        toggleLiked={this.toggleLiked}
      />
    ))
  }

  render() {
    const {text, nameInput, commentList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Comments</h1>
          <div className="input-container">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                className="name-input"
                type="text"
                onChange={this.onChangeInput}
                placeholder="Your Name"
                value={nameInput}
              />
              <textarea
                className="comment"
                placeholder="Your Comment"
                rows="6"
                onChange={this.onChangeText}
                value={text}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
          <hr className="hr" />
          <p className="count">
            <span className="span">{commentList.length}</span> Comments
          </p>
          <ul className="ul-container">{this.renderComments()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
