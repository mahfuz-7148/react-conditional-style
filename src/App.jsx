import React from "react";
import './App.css'
import { useState } from "react";

function App() {

//  const [isClick, setIsClick] = React.useState(false)
  
//   const toggleButton = () => {
//     setIsClick(!isClick)
//   }
  
//   const conditionStyle = {
  //     color: isClick ? 'white' : 'black',
  //     backgroundColor: isClick ? 'blue' : 'cyan'
  //   }
  
  const isLoggedIn = true
  const userName = 'shanto'
  return (
  // <div className="flex p-10 m-20 justify-center gap-6">

  //     <button onClick={toggleButton} className="bg-green-700 text-white p-5 rounded-full">
  //       {!isClick ? 'clicked' : 'not clicked'}
  //     </button>

  //     <div style={conditionStyle} className="bg-green-700 text-white p-5 rounded-full">
  //        hey {!isClick ? 'clicked' : 'not clicked'} !!!
  //     </div>
  // </div>

  <div>
     {isLoggedIn ? <h1>welcome {userName} </h1>:
                   <h1>please log in </h1>}
  </div>
  )
}

export default App
