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
    <h2>Analyzed 3 </h2>

    {
      analyzed.map((el) =>(
      <div className="sentences" key={`${el.sentence_id}anal3`}>

        <span onClick={(event) => handleClick(event, `${el.sentence_id}anal3`)} style={{background: `${el.color}`}}>{el.text}</span>

        { sentenceId == `${el.sentence_id}anal3` ?

          <div className="tones">  {el.tones.tones.map((el2) => (
              <div key={el2.tone_id}>
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
