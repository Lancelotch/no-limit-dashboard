/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

export default function TextButton({children, onClick}) {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

TextButton.propTypes = {
    onClick: PropTypes.func
}

TextButton.defaultProps = {
    onClick : ()=>{}
}
