// @flow

import React from 'react'

type Props = {
  analyzed: [],
  toneView: string,
  handleClick: Function,
  sentenceId: number,
  analyzedDb: []
}

const Analyzed = ({ analyzed, toneView, handleClick, sentenceId }: Props) =>


  <div>

    {
      analyzed.map((el) =>(
      <div className="sentences" key={el.sentence_id}>

        <span onClick={(event) => handleClick(event, el.sentence_id)} style={{background: `${el.color}`}}>{el.text}</span>

        { sentenceId == el.sentence_id ?

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

      // <p>{analyzed[0].text}</p>
    //   <div>
    //   {
    //     analyzed.map((el) => (
    //     <div key={el.sentence_id}>
    //       <div onClick={(event) => handleClick(event, el.sentence_id)} style={{background: el.tone_categories[0].tones[2].score > .2 ? 'red' : 'white'}}>{el.text}</div>
    //
    //       {/* { el.tone_categories[0].tones[0].score > .4 ?
    //         <div style={{background: 'red'}}>I am above a 40 percent in anger</div>
    //         :
    //           <div>I am not very angry</div>
    //         } */}
    //
    //       { sentenceId == el.sentence_id ?
    //         <div>{el.tone_categories.map(el2 => (
    //           <div key={el2.category_id}>
    //             <div>{el2.category_name}</div>
    //             <div>{el2.tones.map(el3 => (
    //               <div key={el3.tone_id}>
    //               <div>{el3.tone_name}</div>
    //               <div>{el3.score}</div>
    //             </div>
    //             ))}
    //           </div>
    //         </div>
    //         ))}
    //       </div>
    //
    //       :
    //       <span></span>
    //
    //       }
    //
    //   </div>
    //     )
    //   )
    //   }
    // </div>
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
