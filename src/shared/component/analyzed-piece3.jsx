// @flow

import React from 'react'

type Props = {
  analyzed: array,
  toneView: string,
  handleClick: Function,
  sentenceId: string,
  analyzedDb: array
}

const Analyzed3 = ({ analyzed, toneView, handleClick, sentenceId }: Props) =>



  <div>

    {
      analyzed.map((el) =>(
      <div className="sentences" key={`${el.sentence_id}anal3`}>

        <div onClick={(event) => handleClick(event, `${el.sentence_id}anal3`)} className={`${el.color}`}>{el.text}</div>

        { sentenceId == `${el.sentence_id}anal3` ?

          <div className="tone-group">  {el.tones.tones.map((el2) => (
              <div className="tones" key={el2.tone_id}>
                <div>{el2.tone_name}</div>
                <div>{el2.score}</div>
              </div>
            ))}
          </div>

        :

        <span></span>

       }

      </div>
      )
     )
    }
</div>

export default Analyzed3
