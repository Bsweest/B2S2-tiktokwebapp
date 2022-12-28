import { observable } from '@legendapp/state';
import { useEffect } from 'react';

export const clientID = observable(null);

const SetupClient = (user) => {
  useEffect(() => {
    if (user) clientID.set(user.id);
    else clientID.set(null);
  }, [user]);
};

export default SetupClient;
