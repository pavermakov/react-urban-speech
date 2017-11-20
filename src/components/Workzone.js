import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class Workzone extends Component {
  render() {
    return (
      <Card className={`${this.props.className} workzone`}>
        <div className="workzone__row">
          {this.renderTranscript()}
        </div>

        <div className="workzone__row workzone__row_pushed_down workzone__row_centered">
          {this.renderButton()}
        </div>
      </Card>
    );
  }

  renderTranscript = () => {
    if (this.props.isRecording) {
      return <span className="workzone__transcript">Listening...</span>;
    }

    if (this.props.transcript.length === 0) {
      return <span className="workzone__transcript workzone__transcript_spaced">Press start to begin</span>;
    }

    return <span className="workzone__transcript">{this.props.transcript}</span>;
  };

  renderButton = () => {
    if (this.props.isRecording) {
      return <button className="workzone__button" onClick={this.props.onRecordingAbort}>abort</button>;
    }

    return <button className="workzone__button" onClick={this.props.onRecordingStart}>start</button>;
  };
}

Workzone.propTypes = {
  className: PropTypes.string,
  transcript: PropTypes.string.isRequired,
  isRecording: PropTypes.bool.isRequired,
  onRecordingStart: PropTypes.func.isRequired,
  onRecordingAbort: PropTypes.func.isRequired,
};

Workzone.defaultProps = {
  className: '',
};

export default Workzone;
