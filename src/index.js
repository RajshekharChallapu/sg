// import react and react domlibarraies
import React from 'react'
import ReactDOM from 'react-dom'


function getButton() {
  return 'Click on Me!';
}
//create react componnet
const App = () => {
  const buttonText = { text: 'click me' }
  const labelText = 'Enter name:'
  return (
    <div>
      <label className="label" htmlFor="name">
       {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText.text}</button>
    </div>
  )
}

//tkae the react component and show it on the screen

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);