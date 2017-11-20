import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const ResultItem = ({ word, author, definition, example }) => {
  return (
    <li className="result-item">
      <Card className="result-item__content">
        <span className="result-item__header">
          <span className="result-item__header-text bold capitalized">{word}</span>
          &nbsp;by&nbsp;
          <span className="result-item__header-text cursive capitalized">{author}</span>
        </span>

        <span className="result-item__body">
          <span className="result-item__definition">{definition}</span>
          <span className="result-item__example bold cursive">{example}</span>
        </span>
      </Card>
    </li>
  );
};

ResultItem.propTypes = {
  word: PropTypes.string,
  author: PropTypes.string,
  definition: PropTypes.string,
  example: PropTypes.string,
  link: PropTypes.string,
};

ResultItem.defaultProps = {
  word: '',
  author: 'some random user',
  definition: 'the word is so weird, there is no possible way to define it',
  example: 'it is impossible to put it in the same sentense with other words',
  link: null,
};

export default ResultItem;
