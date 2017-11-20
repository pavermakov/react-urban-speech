import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem';

class Results extends Component {
  render() {
    return (
      <ul className="results">
        {this.renderResults()}
      </ul>
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
  date: [],
};

export default Results;
