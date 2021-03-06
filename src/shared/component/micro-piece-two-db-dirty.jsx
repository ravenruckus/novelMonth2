import { connect } from 'react-redux'
import React, { Component } from 'react'

import { getPieceDbActions, changeSentenceIdActions } from '../action/write-story'


class MicroOneDB2 extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.getPieceDbActions(this.props.userBookId, this.props.pieceNumber, 2)

  }

  handleClick(event, sentence_id) {
    event.preventDefault()

    this.props.changeSentenceIdActions(sentence_id)

  }


  render() {
    console.log('in micro piece two db commponent', this.props.analyzedDb2)

    return (

      <div>

        {
          this.props.analyzedDb2.map((el) =>(
        <div key={`${el.sentence_id}db2`}>
          <div className={`${el.color}`} onClick={(event) => this.handleClick(event, `${el.sentence_id}db2`)} >{el.text}</div>

        { this.props.sentenceId == `${el.sentence_id}db2` ?

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
   analyzedDb2: state.writeStory.get('analyzedDb2'),
   toneView: state.writeStory.get('toneView'),
   sentenceId: state.writeStory.get('sentenceId'),
  };
};

export default connect(mapStateToProps, {changeSentenceIdActions, getPieceDbActions
})(MicroOneDB2);
