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
    const { list, result_type } = this.props.data;

    if (result_type && result_type === 'no_results') {
      return <ResultItem />;
    }

    if (list && list.length > 0) {
      return (
        list.map((result) => {
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
    }

    return;
  };
}

Results.propTypes = {
  data: PropTypes.object,
};

Results.defaultProps = {
  data: {},
};

export default Results;
