import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';

const chatRoomInFocused = observable({
  roomID: null,
  chatter: null,
  lastRead: null,
});

const changeChatRoom = (id, obj, last) => {
  chatRoomInFocused.set({
    roomID: id,
    chatter: obj,
    lastRead: last,
  });
};

const useIsFocusedChatRoom = (id) => {
  return useSelector(() => chatRoomInFocused.roomID.get() === id);
};
const useFocusedRoomData = () => {
  return useSelector(() => chatRoomInFocused.get());
};
const useFocusedRoomId = () => {
  return useSelector(() => chatRoomInFocused.roomID.get());
};

export {
  useFocusedRoomData,
  useIsFocusedChatRoom,
  useFocusedRoomId,
  changeChatRoom,
};
