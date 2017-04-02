import { connect } from 'react-redux'
import React, { Component } from 'react'

import { changeSentenceIdActions, getOrigActions } from '../action/write-story'
import { Col, Row } from 'react-bootstrap'



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

      <div className="original-piece">

        <div className="originalWriting" >
        <h3>Original</h3>


        {
          this.props.origMicro3.map((el) =>(
        <div key={`${el.sentence_id}orig3`}>
          <div className={`${el.color}`} onClick={(event) => this.handleClick(event, `${el.sentence_id}orig3`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}orig3` ?

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
      <h4> THE CALL TO ADVENTURE</h4>
      <p>"Something shakes up the situation, either from external pressures or from something rising up from deep within, so the hero must face the beginnings of change. " <a href="http://www.thewritersjourney.com/hero%27s_journey.htm" target="_blank">Example of Ordinary </a></p>
      </div>

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
