// @flow

import React from 'react'

type Props = {
  analyzed: [],
  // display: 'none',
  // handleClick: Function,
}

const Analyzed = ({ analyzed }: Props) =>

      // <p>{analyzed[0].text}</p>
      <div>
      {
        analyzed.map((el) => (
        <div>
          <div key={el.sentence_id}>{el.text}</div>
          <div>{el.tone_categories.map(el2 => (
            <div>
              <div>{el2.category_name}</div>
              <div>{el2.tones.map(el3 => (
                <div>
                <div>{el3.tone_name}</div>
                <div>{el3.score}</div>
              </div>
              ))}
            </div>
          </div>
          ))}
        </div>
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
