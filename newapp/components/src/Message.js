import React from 'react'

function Message(props) {
  return (
    <div className="ui message">
      <div className='header'>{props.service}</div>
      <p>{props.serviceChange}</p>
    </div>
  )
}

export default Message
