import React, { useState } from 'react'

import { matchers } from '../data';

import Counter from '../counters/Counter';
import Buttons from '../buttons/Buttons';




const Matchers = () => {

  const [currentMatcher, setCurrentMatcher] = useState(0);
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);
  const [gameResult, setGameResult] = useState(null);


  const handleSubmit = (isTrueButton) => {
    setCurrentMatcher(currentMatcher + 1);

    const currentMatcherData = matchers[currentMatcher];
    if (currentMatcherData.boolean === isTrueButton) {
      setPositiveCount(positiveCount + 1);
    } else {
      setNegativeCount(negativeCount + 1);
    }

    if (currentMatcher >= matchers.length - 1) {
      if (positiveCount > negativeCount) {
        setGameResult('You had the best childhood!');
      } else {
        setGameResult('I need to show you some good oldies ... ');
      }
    }
  };

  return (
    <>

      <Counter positiveCount={positiveCount} negativeCount={negativeCount} />

      <main >

        {gameResult ? (
          <div className="game-result">{gameResult}</div>
        ) : (
          matchers.map((matcher, matcherIndex) => {
            const { id, img, question } = matcher;
            return (
              <div className="matchers" style={{ transform: `translateX(${100 * (matcherIndex - currentMatcher)}%)` }} key={id}>
                <img className='matcherImg' src={img} alt="" />
                <p className='matcherQuestion'>{question}</p>
              </div>
            );
          })
        )}

        {gameResult ? (
          null
        ) : (
          <Buttons handleSubmit={handleSubmit} />
        )
        }

      </main>

    </>
  );
}

export default Matchers