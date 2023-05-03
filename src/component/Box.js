import { useState } from "react"

function Box(props) {
    // using state in each of the child component, not the best method though less complex
    // const [on,setOn] = useState(props.on)

    // function toggleBox(){
    //     setOn(prevState => !prevState)
    // }
    const styles ={
        backgroundColor: props.on ? "#222" : "transparent"
    }
  return (
    <div
       onClick={props.toggle} 
       style={styles} 
       className='box'></div>
  )
}

export default Box