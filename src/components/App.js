import React, { Component } from 'react';
import annyang from 'annyang';
import axios from 'axios';

import Workzone from './Workzone';
import Results from './Results';
import Unsupported from './Unsupported';

import config from '../config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSpeechAvailable: !!annyang,
      transcript: '',
      isRecording: false,
      results: {},
    };
  }

  componentWillMount() {
    if (!this.state.isSpeechAvailable) return;

    annyang.addCallback('result', this.handleSpeechResult);
  }

  render() {
    return (
      <div className="app">
        {this.state.isSpeechAvailable ? this.renderOnSuccess() : this.renderOnError()}
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.transcript !== nextState.transcript && nextState.transcript !== '') {
      this.fetchDefinition(nextState.transcript);
    }

    return true;
  }

  renderOnSuccess = () => {
    return (
      <div className="app__wrapper">
        <main className="app__body">
          <Workzone
            className="app__workzone"
            transcript={this.state.transcript}
            isRecording={this.state.isRecording}
            onRecordingStart={this.handleRecordingStart}
            onRecordingAbort={this.abortRecording}
          />

          <div className="app__results">
            <Results data={this.state.results.list} />
          </div>
        </main>

        <footer className="app__footer"></footer>
      </div>
    );
  };

  renderOnError = () => {
    return <Unsupported />;
  };

  handleSpeechResult = (event) => {
    this.saveTranscript(event);
    this.abortRecording();
  }

  saveTranscript = (event) => {
    this.setState({ transcript: event[0] });
  };

  handleRecordingStart = () => {
    this.resetResults();
    this.startRecording();
  }

  startRecording = () => {
    annyang.start({ autoRestart: true, continuous: true });
    this.setState({ isRecording: true });
  };

  abortRecording = () => {
    annyang.abort();
    this.setState({ isRecording: false });
  };

  fetchDefinition = (term) => {
    axios.get(`${config.urbanDictionaryApi}${encodeURI(term)}`)
      .then(this.handleDictionaryResponse)
      .catch((err) => {
        console.log(err);
      });
  };

  handleDictionaryResponse = ({ data }) => {
    console.log(data);
    this.setState({ results: data });
  };

  handleDictionaryError = (err) => {
    console.log(err);
  };

  resetResults = () => {
    this.setState({ results: [], transcript: '' });
  };
}

export default App;
