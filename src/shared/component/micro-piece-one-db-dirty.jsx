import { connect } from 'react-redux'
import React, { Component } from 'react'

import { getPieceDbActions, changeSentenceIdActions } from '../action/write-story'


class MicroOneDB extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getPieceDbActions(this.props.userBookId, this.props.pieceNumber, 1)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceIdActions(sentence_id)

  }


  render() {
    console.log('in micro piece one db commponent', this.props.analyzedDb1)

    return (

      <div>

        {
          this.props.analyzedDb1.map((el) =>(
        <div key={`${el.sentence_id}db1`}>
          <div className={`${el.color}`} onClick={(event) => this.handleClick(event, `${el.sentence_id}db1`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}db1` ?

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

export default connect(mapStateToProps, {changeSentenceIdActions, getPieceDbActions
})(MicroOneDB);
