import React from 'react'


const Comments = (props) => {
  return (
    <div className="containers">
    <div className="comments">
      <a href='/' className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className='author'>
          {props.author}
        </a>
        <div className="metadata">
            <span className="date">{props.timeAgo}</span>
        </div>
          <div className="text">{props.postData}</div>
      </div>
    </div>
  </div>
  )
}

export default Comments
