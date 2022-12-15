import { useCallback, useEffect, useMemo, useState } from 'react';

const useKeyboardControl = () => {
  const [controls, setControls] = useState({
    comment: false,
    heart: false,
    bookmark: false,
  });
  const map = useMemo(
    () => ({
      KeyC: 'comment',
      KeyH: 'heart',
      keyB: 'bookmark',
    }),
    [],
  );

  const getField = useCallback((value) => map[value], [map]);

  const handleKeyPress = useCallback(
    ({ code }) => {
      if (document.activeElement.nodeName.toLowerCase() === 'input') return;
      setControls((prev) => ({ ...prev, [getField(code)]: true }));
    },
    [getField],
  );

  const handleKeyUp = useCallback(
    ({ code }) => {
      if (document.activeElement.nodeName.toLowerCase() === 'input') return;
      setControls((prev) => ({ ...prev, [getField(code)]: false }));
    },
    [getField],
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', handleKeyUp);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyPress, handleKeyUp]);

  return controls;
};

export { useKeyboardControl };
