import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import ResultItem from './ResultItem';

class Results extends Component {
  render() {
    return (
      <CSSTransitionGroup
        className="results"
        component="ul"
        transitionName="swing"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.renderResults()}
      </CSSTransitionGroup>
    );
  }

  renderResults = () => {
    return (
      this.props.data.map((result) => {
        return (
          <ResultItem
            key={result.defid}
            word={result.word}
            author={result.author}
            definition={result.definition}
            example={result.example}
            link={result.permalink}
          />
        );
      })
    );
  };
}

Results.propTypes = {
  data: PropTypes.array,
};

Results.defaultProps = {
  data: [],
};

export default Results;
