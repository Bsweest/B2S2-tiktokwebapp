import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const chatRoomInFocused = observable({
  roomID: null,
  chatter: null,
  lastRead: null,
});

const changeChatRoom = (obj, last) => {
  chatRoomInFocused.set({
    chatter: obj,
    lastRead: last,
  });
};

const useFocusedRoomData = () => {
  return useSelector(() => chatRoomInFocused.get());
};

export { useFocusedRoomData, changeChatRoom };
