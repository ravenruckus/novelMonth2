// @flow

import React from 'react'

type Props = {
  analyzed: [],
  toneView: string,
  handleClick: Function,
  sentenceId: number
}

// const view = 'none'

const Analyzed = ({ analyzed, toneView, handleClick, sentenceId }: Props) =>

      // <p>{analyzed[0].text}</p>
      <div>
      {
        analyzed.map((el) => (
        <div key={el.sentence_id}>
          <div onClick={(event) => handleClick(event, el.sentence_id)}>{el.text}</div>
          { sentenceId == el.sentence_id ?

            <div>{el.tone_categories.map(el2 => (
              <div key={el2.category_id}>
                <div>{el2.category_name}</div>
                <div>{el2.tones.map(el3 => (
                  <div key={el3.tone_id}>
                  <div>{el3.tone_name}</div>
                  <div>{el3.score}</div>
                </div>
                ))}
              </div>
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
// {
//       analyzed.data.data.sentences_tone.map(el => (
//       <div>
//         <p key={el.sentence_id}>{el.text}</p>
//         <div> {el.tone_categories.map(el2 => (
//           <div>
//           <p>{el2.category_name}</p>
//           <div>
//           { el2.tones.map(el3 => (
//             <div>
//               <p>{el3.tone_name}</p>
//               <p>{el3.score}</p>
//            </div>
//           ))}
//         </div>
//       </div>
//         )
//       )
//     }</div>
//       </div>
//       )
//     )
//   }

  // <p>{ analyzed }</p>

  // {
  //   analyzed.data.data.document_tone.tone_categories.map(el => (
  //     <div>
  //       <p key
  //     </div>
  //   ))
  // }
// {
    //     { analyzed.data.data.document_tone.map(el => (
    //     <div>
    //       <p key={el.sentence_id}>{el.text}</p>
    //       <div> {el.tone_categories.map(el2 => (
    //         <div>
    //         <p>{el2.category_name}</p>
    //         <div>
    //         { el2.tones.map(el3 => (
    //           <div>
    //             <p>{el3.tone_name}</p>
    //             <p>{el3.score}</p>
    //          </div>
    //         ))}
    //       </div>
    //     </div>
    //       )
    //     )
    //   }</div>
    //     </div>
    //     )
    //   )
    // }

export default Analyzed
