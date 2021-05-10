import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import Comments from './Comments'
import ApprovalCard from './ApprovalCard';
import Message from './Message'
import Reusable from './Reusable'

class App extends React.Component {
  render() {
    return (
      <>
      <div className="containers">

        <ApprovalCard>
          <div>
            <h4>Warning</h4>
            Are you sure you want to delete this?
            </div>
        </ApprovalCard>
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
        <ApprovalCard>
      <div>
        <Message service="Changes in Service" serviceChange="We just updated our privacy policy here to better service our customers"/>
          </div>
        </ApprovalCard>
        
        <Reusable>
          
        </Reusable>
      </>
      
      
    )
  }
}
  


ReactDOM.render(<App />, document.querySelector('#root1'));