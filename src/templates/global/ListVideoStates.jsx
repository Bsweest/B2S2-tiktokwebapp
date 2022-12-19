import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';

const listVideoStates = observable({
  currentElement: null,
  isOpenComment: false,
});

const useListVideoStates = () => {
  return useSelector(() => listVideoStates.get());
};

const toggleCommentSection = (id) => {
  if (!listVideoStates.isOpenComment.peek()) {
    listVideoStates.isOpenComment.set(true);
  } else {
    listVideoStates.isOpenComment.set(false);
  }
};

const changeCurrentElement = (ssid) => {
  listVideoStates.currentElement.set(ssid);
};

export { useListVideoStates, toggleCommentSection, changeCurrentElement };
