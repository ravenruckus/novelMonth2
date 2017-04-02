import { connect } from 'react-redux'
import React, { Component } from 'react'

import { changeSentenceIdActions, getOrigActions } from '../action/write-story'
import { Col, Row } from 'react-bootstrap'

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

  <div className="original-piece">

    <div className="originalWriting" >
        <h3>Original</h3>

        {
          this.props.origMicro2.map((el) =>(
        <div key={`${el.sentence_id}orig2`}>
          <div className={`${el.color}`} onClick={(event) => this.handleClick(event, `${el.sentence_id}orig2`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}orig2` ?

          <div className="tone-group"> {el.tones.tones.map((el2) => (
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
      <div className="heros-tip">
        <h4>THE ORDINARY WORLD</h4>
        <p>"The hero, uneasy, uncomfortable or unaware, is introduced sympathetically so the audience can identify with the situation or dilemma.  The hero is shown against a background of environment, heredity, and personal history.  Some kind of polarity in the hero’s life is pulling in different directions and causing stress." <a href="http://www.thewritersjourney.com/hero%27s_journey.htm" target="_blank">Example of Ordinary </a></p>
      </div>

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
