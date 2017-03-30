import { connect } from 'react-redux'
import React, { Component } from 'react'

import { changeSentenceIdActions, getOrigActions } from '../action/write-story'


class MicroThreeOrig extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getOrigActions(3, this.props.pieceNumber)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceIdActions(sentence_id)

  }


  render() {
    console.log('in micro piece three orig commponent', this.props.origMicro3)

    return (

      <div>
        <h2>Original Piece Micro 3</h2>
      <div>

        {
          this.props.origMicro3.map((el) =>(
        <div key={`${el.sentence_id}orig3`}>
          <div style={{background: `${el.color}`}} onClick={(event) => this.handleClick(event, `${el.sentence_id}orig3`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}orig3` ?

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
   origMicro3: state.writeStory.get('origMicro3'),
  };
};

export default connect(mapStateToProps, { changeSentenceIdActions, getOrigActions
})(MicroThreeOrig);
