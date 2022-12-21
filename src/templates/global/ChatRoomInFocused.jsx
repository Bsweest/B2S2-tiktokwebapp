import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';

const chatRoomInFocused = observable({
  roomID: null,
  chatter: null,
});

const changeChatRoom = (id, obj) => {
  chatRoomInFocused.set({
    roomID: id,
    chatter: obj,
  });
};

const useIsFocusedChatRoom = (id) => {
  return useSelector(() => chatRoomInFocused.roomID.get() === id);
};
const useFocusedRoom = () => {
  return useSelector(() => chatRoomInFocused.get());
};

export { useFocusedRoom, useIsFocusedChatRoom, changeChatRoom };
