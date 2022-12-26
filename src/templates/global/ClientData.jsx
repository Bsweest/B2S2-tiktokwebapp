import { observable } from '@legendapp/state';

export const clientID = observable(null);

const SetupClient = (id) => {
  clientID.set(id);
};

export default SetupClient;
