import { observable } from '@legendapp/state';
import { useEffect } from 'react';

import { testID } from '../../../test_id';

export const clientID = observable();

const SetupClient = () => {
  clientID.set(testID);
};

export default SetupClient;
