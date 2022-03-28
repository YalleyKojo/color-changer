import React from 'react'


const Card = ({ color,hexcolor,isdark }) => {
    
    return (
        <div class="square"
            style={{
                backgroundColor: color,
                color:isdark? "#000": "#FFF"
            }}
        >
            <p>{color ? color : "Empty Value"} </p>
            <p>{hexcolor ? hexcolor : null}</p>

 
</div>
  )
}

export default Card