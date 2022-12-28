import React from 'react';

import AccountDropdown from './AccountDropdown';
import Message from './Message';
import Notification from './Notification';

const UserHeader = () => {
  return (
    <>
      <Message />

      <Notification />

      <AccountDropdown />
    </>
  );
};

export default UserHeader;
