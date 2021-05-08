import React from "react";

function ApprovalCard(props) {
  console.log(props.children)
  return (
    <div className="Uui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
      <div className="ui buttons">
      <div className="ui basic green button"> Approve</div>
      <div className="ui basic red button"> Reject</div>
      {/* <button>Approve</button>
      <button>Reject</button> */}
      </div>
      </div>
      </div>
  );
}

export default ApprovalCard;
