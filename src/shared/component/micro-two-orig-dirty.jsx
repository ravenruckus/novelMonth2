import { connect } from 'react-redux'
import React, { Component } from 'react'

import { changeSentenceIdActions, getOrigActions } from '../action/write-story'


class MicroTwoOrig extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getOrigActions(2, this.props.pieceNumber)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceIdActions(sentence_id)

  }


  render() {
    console.log('in micro piece two orig commponent', this.props.origMicro2)

    return (

      <div>
        <h2>Original Piece Micro 2</h2>
      <div>

        {
          this.props.origMicro2.map((el) =>(
        <div key={`${el.sentence_id}orig2`}>
          <div style={{background: `${el.color}`}} onClick={(event) => this.handleClick(event, `${el.sentence_id}orig2`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}orig2` ?

          <div> {el.tones.tones.map((el2) => (
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

    <h3>End orig</h3>
  </div>

    )
  }
};

const mapStateToProps = (state) =>  {
  return {
   toneView: state.writeStory.get('toneView'),
   sentenceId: state.writeStory.get('sentenceId'),
   origMicro2: state.writeStory.get('origMicro2'),
  };
};

export default connect(mapStateToProps, { changeSentenceIdActions, getOrigActions
})(MicroTwoOrig);
