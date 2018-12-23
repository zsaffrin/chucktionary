import React from 'react';

const Button = ({ background, click, text, textColor }) => {
  const style = {
    appearance: 'none',
    background: background,
    borderRadius: '.25em',
    color: textColor,
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '.5em 1em',
  };
  return (
    <button onClick={click} style={style}>
      {text}
    </button>
  );
};

export default Button;
