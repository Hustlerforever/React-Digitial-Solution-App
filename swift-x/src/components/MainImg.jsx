import React from 'react'

function MainImg(props) {
  return (
    <div>
    <img src={props.src} alt="Item1" className="img-fluid shadow-1" />
  </div>
  )
}

export default MainImg