import { connect } from 'react-redux'
import React, { Component } from 'react'

import { getPieceDbActions, changeSentenceId } from '../action/write-story'


class MicroOneDB extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getPieceDbActions(this.props.userBookId, this.props.pieceNumber)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceId(sentence_id)

  }


  render() {
    console.log('in micro piece one db commponent', this.props.analyzedDb1)

    return (

      <div>
          <h2>In db response.</h2>
      <div>

        {
          this.props.analyzedDb1.map((el) =>(
        <div key={`${el.sentence_id}db1`}>
          <div style={{background: `${el.color}`}} onClick={(event) => this.handleClick(event, `${el.sentence_id}db1`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}db1` ?

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
   analyzedDb1: state.writeStory.get('analyzedDb1'),
   toneView: state.writeStory.get('toneView'),
   sentenceId: state.writeStory.get('sentenceId'),
  };
};

export default connect(mapStateToProps, {changeSentenceId, getPieceDbActions
})(MicroOneDB);
