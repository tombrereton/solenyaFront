import React from 'react';
import PropTypes from 'prop-types';
import style from './Preloader.css';

const Preloader = ({
  classList,
  copy,
  defaultStyle = style,
}) => (
  <div className={`${defaultStyle.preloader} ${classList}`}>
    {copy}
  </div>
);

Preloader.propTypes = {
  classList: PropTypes.string,
  copy: PropTypes.string,
  defaultStyle: PropTypes.string,
};

export default Preloader;
