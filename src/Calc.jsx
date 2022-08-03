import React from 'react'

const Calc = () => {
  //const [result,setResult]= useState("");
  return (
    <>
    <div  className='container'>
    <h1 className='heading'> Calculator</h1>
        
        <div className='calculator' >
          <form>
        <input  type=" text" />
        </form>
            <table >
                <tr>
                 <td><button> AC</button></td>   
                 <td><button> %</button></td> 
                 <td><button> *</button></td> 
                 <td><button> -</button></td> 
                </tr>
                <tr >
                 <td><button >7 </button></td>   
                 <td><button> 8</button></td> 
                 <td><button> 9</button></td> 
                 <td><button>+</button></td> 
                </tr>
                <tr >
                 <td><button> 4</button></td>   
                 <td><button> 5</button></td> 
                 <td><button> 6</button></td> 
                 <td><button>(</button></td> 
                </tr>
                <tr>
                 <td><button> 1</button></td>   
                 <td><button> 2</button></td> 
                 <td><button> 3</button></td> 
                 <td><button> ) </button></td> 
                </tr>
                <tr >
                 <td><button> 0</button></td>   
                 <td><button> .</button></td> 
                 <td><button> /</button></td> 
                 <td><button> =</button></td> 
                </tr>
            </table>
        </div>
       </div>
    </>
  )
}

export default Calc