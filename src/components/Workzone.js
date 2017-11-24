import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Card from './Card';
import Loader from './Loader';

class Workzone extends Component {
  render() {
    const { isFetching } = this.props;

    return (
      <Card className={`${this.props.className} workzone`}>
        <CSSTransitionGroup
          className="workzone__row"
          component="div"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.renderTranscript()}
        </CSSTransitionGroup>

        <div className="workzone__row workzone__row_pushed_down workzone__row_centered">
          {this.renderButton()}
        </div>

        <div className={isFetching ? `workzone__loader workzone__loader_active` : 'workzone__loader'}>
          <Loader />
        </div>
      </Card>
    );
  }

  renderTranscript = () => {
    if (this.props.isRecording) {
      return <span className="workzone__transcript" key="active">Listening...</span>;
    }

    if (this.props.transcript.length === 0) {
      return <span className="workzone__transcript" key="initial">Press start to begin</span>;
    }

    return <span className="workzone__transcript" key="final">{this.props.transcript}</span>;
  };

  renderButton = () => {
    const text = this.props.isRecording ? 'abort' : 'start';
    const callback = this.props.isRecording ? this.props.onRecordingAbort : this.props.onRecordingStart;

    return <button className="workzone__button" onClick={callback}>{text}</button>;
  };
}

Workzone.propTypes = {
  className: PropTypes.string,
  transcript: PropTypes.string.isRequired,
  isRecording: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onRecordingStart: PropTypes.func.isRequired,
  onRecordingAbort: PropTypes.func.isRequired,
};

Workzone.defaultProps = {
  className: '',
};

export default Workzone;
