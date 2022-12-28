import { useEffect, useState } from 'react';

const formmater = Intl.NumberFormat('en', { notation: 'compact' });

const convertInteractNumber = ({ total_hearts, followed, following }) => {
  return [
    formmater.format(total_hearts),
    formmater.format(followed),
    formmater.format(following),
  ];
};

const useInteractNumber = (data) => {
  const [numbers, setNumbers] = useState([0, 0, 0]);

  useEffect(() => {
    if (data) setNumbers(convertInteractNumber(data));
  }, [data]);

  return numbers;
};

export default useInteractNumber;
