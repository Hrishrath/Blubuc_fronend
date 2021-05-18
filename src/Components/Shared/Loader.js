import React from 'react'

const Loader = () => {

    const spinner = {
            height: '80vh',
            width:'100%'
         }

    return (
    <div className ='spinner d-flex'>
        <div className="spinner-border text-primary m-auto" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  </div>
  )
}

export default Loader
