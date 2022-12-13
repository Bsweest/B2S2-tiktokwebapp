import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';

const commentSectionState = observable({
  isOpen: false,
  fetchID: null,
});

const closeCommentSection = () => {
  commentSectionState.set({
    isOpen: false,
    fetchID: null,
  });
};

const openCommentSection = (id) => {
  if (!commentSectionState.isOpen.get()) {
    commentSectionState.set({
      isOpen: true,
      fetchID: id,
    });
  } else closeCommentSection();
};

const useCommentSection = () => {
  return useSelector(() => commentSectionState.get());
};

export { openCommentSection, closeCommentSection };

export default useCommentSection;
