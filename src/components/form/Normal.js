import React from 'react'

const Normal = ({name,price,tag}) => {
  return (
    <div>
             <div className="normal-container" >
          <p>Name:{name}</p>
          <p>Price:{price}</p>
          <p>Tag:{tag}</p>
        </div>
    </div>
  )
}

export default Normal
