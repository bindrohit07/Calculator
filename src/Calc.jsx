//import React from 'react'
import React,{useState} from 'react'
const Calc = () => {
  const [result,setResult]= useState("");
const handleClick =(e) => {
setResult(result.concat(e.target.name));
} 
const clear =() =>{
  setResult("");
}
const backspace =()=>{
 setResult(result.slice(0, - 1));//setResult(result.slice(0, result.length- 1))
}
const calculate =() => {
  try{
    setResult(eval(result).toString())
  }
  catch(err){
    setResult("Error")
  }
}

  return (
    <>
    <div  className='container'>
    <h1 className='heading'> Calculator</h1>
        
        <div className='calculator' >
          <form>
        <input  type=" text" value={result} />
        </form>
            <table >
                <tr>
                 <td><button id='h2' onClick={clear}>AC</button></td>
                 <td><button  id='h3' onClick={backspace}>C</button></td>
                 <td><button  className='hilight'name='*' onClick={handleClick}>&times;</button></td>
                 <td><button  className='hilight' name='-' onClick={handleClick}>&ndash;</button></td> 
                </tr>
                <tr >
                 <td><button name='7' onClick={handleClick} >7 </button></td>   
                 <td><button name='8' onClick={handleClick}> 8</button></td> 
                 <td><button name='9'onClick={handleClick}> 9</button></td> 
                 <td><button  className='hilight' name='+' onClick={handleClick}>+</button></td> 
                </tr>
                <tr >
                 <td><button  name='4'  onClick={handleClick} > 4</button></td>  
                 <td><button name='5' onClick={handleClick} > 5</button></td> 
                 <td><button name='6' onClick={handleClick} > 6</button></td> 
                 <td><button  className='hilight'name='(' onClick={handleClick} >(</button></td> 
                </tr>
                <tr>
                 <td><button name='1' onClick={handleClick} > 1</button></td>   
                 <td><button name='2' onClick={handleClick} > 2</button></td> 
                 <td><button name='3' onClick={handleClick} > 3</button></td> 
                 <td><button  className='hilight' name=')' onClick={handleClick} > ) </button></td> 
                </tr>
                <tr >
                 <td><button name='0' onClick={handleClick} > 0</button></td>   
                 <td><button name='.' onClick={handleClick} > .</button></td> 
                 <td><button name='/' onClick={handleClick} >&divide;</button></td> 
                 <td><button  id='h1' name='=' onClick={calculate} > =</button></td> 
                </tr>
            </table>
        </div>
       </div>
    </>
  )
}

export default Calc