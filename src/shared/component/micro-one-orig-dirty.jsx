import { connect } from 'react-redux'
import React, { Component } from 'react'

import { changeSentenceId, getOrigActions } from '../action/write-story'


class MicroOneOrig extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getOrigActions(1, this.props.pieceNumber)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceId(sentence_id)

  }


  render() {
    console.log('in micro piece one orig commponent', this.props.origMicro1)

    return (

      <div>
        <h2>Original Piece </h2>
      <div>

        {
          this.props.origMicro1.map((el) =>(
        <div key={el.sentence_id}>
          <div onClick={(event) => this.handleClick(event, el.sentence_id)} >{el.text}</div>

        { this.props.sentenceId == el.sentence_id ?

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
   origMicro1: state.writeStory.get('origMicro1'),
  };
};

export default connect(mapStateToProps, { changeSentenceId, getOrigActions
})(MicroOneOrig);
