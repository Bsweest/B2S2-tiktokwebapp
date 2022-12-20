import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';

const listVideoStates = observable({
  currentElement: {
    id: null,
    numComment: 0,
  },
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

const changeCurrentElement = (ssid, num) => {
  listVideoStates.currentElement.set({ id: ssid, numComment: num });
};

export { useListVideoStates, toggleCommentSection, changeCurrentElement };
