/*import React from 'react'

import Calc from './Calc'
function App()  {

  let screen=document.getElementById('screen');
  buttons=document.querySelectorAll('button');
  for(item of buttons){
    item.addEventListener('click',(e)=>{
      buttonText=e.target.innerText;
      console.log('Button text is',buttonText)

    })
  }
  
  return (
<>
<Calc/>
</>
  )
}
export default App
*/
import React from 'react'
//import { useState } from 'react
import Calc from './Calc'
const App = () => {

  //const [result,setResult]= useState("");
    return (
    <>

  <Calc/>
    
    </>
    
  )
}
export default App