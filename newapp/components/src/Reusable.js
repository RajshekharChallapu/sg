import React from 'react'

function Reusable(props) {
  return (
    <div>
      <div className="ui placeholder segement">{props.children}
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
        </div>
        <div className="ui primary button">Add Document</div>
      </div>
    </div>
  )
}

export default Reusable
