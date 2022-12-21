import { useEffect } from 'react';

const useTestData = (data) => {
  useEffect(() => {
    if (data) console.log('data', data);
  }, [data]);
};

export default useTestData;
