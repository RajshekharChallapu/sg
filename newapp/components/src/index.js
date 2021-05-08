import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import Comments from './Comments'
import ApprovalCard from'./ApprovalCard'

const App = () => {
  return (
    <div className="containers">
      <ApprovalCard>
        {/* //child component */}
      <Comments author="SAM" timeAgo="Today at 4:30 PM" postData="Nice blog post!0" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      <Comments author="raj" timeAgo="Today at 4:11 PM" postData="Nice blog post!2" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
      <Comments author="kaka" timeAgo="Today at 4:00 PM" postData="Nice blog post1!" avatar={faker.image.avatar()} />
      </ApprovalCard>

    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));