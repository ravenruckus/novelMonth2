import { connect } from 'react-redux'
import React, { Component } from 'react'

import { changeSentenceIdActions, getOrigActions } from '../action/write-story'
import { Col, Row } from 'react-bootstrap'

class MicroOneOrig extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getOrigActions(1, this.props.pieceNumber)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceIdActions(sentence_id)

  }


  render() {
    console.log('in micro piece one orig commponent', this.props.origMicro1)

    return (

      <Row>
      <Col md={8} className="original-piece" >
        <h3>Original</h3>


        {
          this.props.origMicro1.map((el) =>(
        <div key={`${el.sentence_id}orig1`}>
          <div className={`${el.color}`} onClick={(event) => this.handleClick(event, `${el.sentence_id}orig1`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}orig1` ?

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

      </Col>

      <Col md={3} mdOffset={1} className="heros-tip">
        <h4>THE ORDINARY WORLD</h4>
        <p>"The hero, uneasy, uncomfortable or unaware, is introduced sympathetically so the audience can identify with the situation or dilemma.  The hero is shown against a background of environment, heredity, and personal history.  Some kind of polarity in the hero’s life is pulling in different directions and causing stress." <a href="http://www.thewritersjourney.com/hero%27s_journey.htm" target="_blank">Example of Ordinary </a></p>
      </Col>

    </Row>

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

export default connect(mapStateToProps, { changeSentenceIdActions, getOrigActions
})(MicroOneOrig);
