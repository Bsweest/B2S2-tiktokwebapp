const useMsgStyles = () => {
  const radiusPlus = '1.8rem';
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
      p: '0.5rem 1rem',
      borderRadius: '8px',
      marginBottom: '2px',
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
      borderTopLeftRadius: radiusPlus,
    },
    leftLast: {
      borderBottomLeftRadius: radiusPlus,
      mb: '8px',
    },
    rightFirst: {
      borderTopRightRadius: radiusPlus,
    },
    rightLast: {
      borderBottomRightRadius: radiusPlus,
      mb: '8px',
    },
  };
};

export default useMsgStyles;
