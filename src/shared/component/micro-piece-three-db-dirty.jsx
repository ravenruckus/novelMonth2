import { connect } from 'react-redux'
import React, { Component } from 'react'

import { getPieceDbActions, changeSentenceId } from '../action/write-story'


class MicroOneDB3 extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getPieceDbActions(this.props.userBookId, this.props.pieceNumber, 3)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceId(sentence_id)

  }


  render() {
    console.log('in micro piece three db commponent', this.props.analyzedDb3)

    return (

      <div>
          <h2>In db response three.</h2>
      <div>

        {
          this.props.analyzedDb3.map((el) =>(
        <div key={`${el.sentence_id}db3`}>
          <div style={{background: `${el.color}`}} onClick={(event) => this.handleClick(event, `${el.sentence_id}db3`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}db3` ?

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
    <h2>End db response</h2>
  </div>

    )
  }
};

const mapStateToProps = (state) =>  {
  return {
   analyzedDb3: state.writeStory.get('analyzedDb3'),
   toneView: state.writeStory.get('toneView'),
   sentenceId: state.writeStory.get('sentenceId'),
  };
};

export default connect(mapStateToProps, {changeSentenceId, getPieceDbActions
})(MicroOneDB3);
