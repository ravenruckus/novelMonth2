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

      <div className="original-piece">

        <div className="originalWriting" >
          <h3>Original</h3>

        {
          this.props.origMicro1.map((el) =>(
        <div key={`${el.sentence_id}orig1`}>
          <div className={`${el.color}`} onClick={(event) => this.handleClick(event, `${el.sentence_id}orig1`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}orig1` ?

          <div className="tone-group"> {el.tones.tones.map((el2) => (
            <div className="tones" key={el2.tone_id}>
              <div>{el2.tone_name}</div>
              <div>{el2.score.toFixed(2)}</div>
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
        <h3>The Hero's Journey</h3>
        <h4>THE ORDINARY WORLD</h4>
        <p>"The hero, uneasy, uncomfortable or unaware, is introduced sympathetically so the audience can identify with the situation or dilemma.  The hero is shown against a background of environment, heredity, and personal history.  Some kind of polarity in the hero’s life is pulling in different directions and causing stress." <a href="http://www.thewritersjourney.com/hero%27s_journey.htm" target="_blank">Example of Ordinary </a></p>
        <p>The Ordinary World is what the character's life is like before the adventure begins. In the begining of the movie, <i>The Wizard of Oz</i>, the film is in black and white to show the stark contrast between Dorothy's life before the adventure begins and the magical world she enters. This is a good place to describe the scenery and introduce influential people in the main character's life. To make the story more intersting to read - show don't tell by using active language.</p>

        <h4>INFLUENTIAL PEOPLE</h4>
        <p>Show the relationship between characters, don't tell and use active language. For example: "When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart..."</p>

        <h4>SCENERY</h4>
        <p>Show the surroundings using active language: "The sun had baked the plowed land into a gray mass, with little cracks running through it."</p>
      </div>

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

export default connect(mapStateToProps, { changeSentenceIdActions, getOrigActions
})(MicroOneOrig);
