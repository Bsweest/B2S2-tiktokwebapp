const useMsgStyles = () => {
  const radiusPlus = '10rem';
  const size = '2rem';

  return {
    avatar: {
      width: size,
      height: size,
      mr: '0.8rem',
    },
    leftRow: {
      textAlign: 'left',
    },
    rightRow: {
      textAlign: 'right',
    },
    msg: {
      p: '0.3rem 1rem',
      borderRadius: '10px',
      marginTop: '2px',
      display: 'inline-block',
      wordBreak: 'break-word',
    },
    left: {
      borderTopRightRadius: radiusPlus,
      borderBottomRightRadius: radiusPlus,
      backgroundColor: '#2C2C2C',
    },
    right: {
      borderTopLeftRadius: radiusPlus,
      borderBottomLeftRadius: radiusPlus,
      backgroundColor: '#5B24D1',
    },
    leftFirst: {
      borderBottomLeftRadius: radiusPlus,
    },
    leftLast: {
      borderTopLeftRadius: radiusPlus,
    },
    rightFirst: {
      borderBottomRightRadius: radiusPlus,
    },
    rightLast: {
      borderTopRightRadius: radiusPlus,
    },
  };
};

export default useMsgStyles;
