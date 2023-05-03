import React, { useState } from 'react'
import BoxesData from './BoxesData'
import Box from './component/Box'

function App() {
  const [square,setSquare] = useState(BoxesData)
  
  function toggle(id){
    setSquare(prevSquare => {
      return prevSquare.map((eachSquare) =>{
        return eachSquare.id === id ? {...eachSquare, on: ! eachSquare.on} : eachSquare
      })
    })
  }

    const squareElements = square.map(eachSquare =>(
      <Box 
        key={eachSquare.id} 
        // id={eachSquare.id}
        on={eachSquare.on}
        toggle={() => toggle(eachSquare.id)} />
  ))

  return (
    <div className="App">
      <h1 className='header-text'>Click the squares to toggle colours</h1>
     {squareElements}
    </div>
  );
}

export default App;

// this is the longer version now simplified above
// const newSquares = []
// for (let i = 0; i < prevSquare.length; i++){
//   const currentSquare = prevSquare[i]
//   if(currentSquare.id === id){
//     const updatedSquare = {
//       ...currentSquare,
//       on: !currentSquare.on
//     }
//     newSquares.push(updatedSquare)
//   }else{
//     newSquares.push(currentSquare)
//   }
// }
// return newSquares