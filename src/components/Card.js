import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, children }) => <div className={`${className} card`}>{children}</div>;

Card.propTypes = {
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
