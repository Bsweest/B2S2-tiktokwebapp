import { observable } from '@legendapp/state';
import { useRouter } from 'next/router';

import { clientID } from './ClientData';

const checkAuth = observable(0);

const CheckAuth = () => {
  if (!clientID.peek()) {
    checkAuth.set((prev) => ++prev);
    return false;
  }
  return true;
};

const CheckAuthProvider = () => {
  const router = useRouter();

  checkAuth.onChange(() => {
    router.push('/login');
  });
};

export { CheckAuthProvider, CheckAuth };
