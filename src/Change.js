import React from 'react'
import colorNames from 'colornames'
const Change = ({
    color, setColor, 
    setHexColor, isdark,setIsDark
}) => {
  return (
      <form className='colorChange' onSubmit={(e)=>e.preventDefault()}>
          <input
              
              type='text'
              autoFocus
              required
              value={color}
              onChange={(e) => {
                  setColor(e.target.value)
                  setHexColor(colorNames(e.target.value))
              }}
              placeholder="Please input color"
          />

          <button 
              type='button'
          onClick={()=>setIsDark(!isdark)}
          >
              Toggle text color

          </button>
          

    </form>
  )
}

export default Change