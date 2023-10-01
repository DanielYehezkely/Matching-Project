import React from 'react'

import RestartButton from '../buttons/RestartButton'

const Counter = ({ positiveCount, negativeCount }) => {
  return (

    <>

      <header >
        <div className="counter">
          <img className='negativeImg' src="/assets/meme_woman_yelling.png" alt="" />
          <h2>{negativeCount}</h2>
        </div>
        <RestartButton />
        <div className="counter">
          <img className='positiveImg' src="/assets/meme_cat_being_yelled_at.png" alt="" />
          <h2>{positiveCount}</h2>
        </div>
      </header>

    </>

  )
}

export default Counter