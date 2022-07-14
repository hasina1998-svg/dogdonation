import React from 'react'
import snackData from './snackData'
import { Link } from 'react-router-dom'

const Snack = () => {
  return (
    <div>

        {
        snackData.map((item)=>{
            return(
                <>
                <Link to={item.path}>
                <p>{item.name} {item.path}</p>
                </Link>
                </>
            )
        })

}
    </div>
  )
}

export default Snack