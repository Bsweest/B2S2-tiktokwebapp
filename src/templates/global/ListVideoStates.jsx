import { observable } from '@legendapp/state';
import { useSelector } from '@legendapp/state/react';

const listVideoStates = observable({
  currentElement: {
    id: null,
    op_id: null,
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

const changeCurrentElement = (ssid, op_id, num) => {
  listVideoStates.currentElement.set({
    id: ssid,
    op_id: op_id,
    numComment: num,
  });
};

const replyTo = observable({
  show: null, // name of the person you reply to show on input bar
  displayname: null, // name of the person you reply to show above comment
  parentID: null, // comment that contain the adding comment
  commentID: null, // Check the comment current reply
  successPID: null, // parent id of comment that success add to db to open children comment
});

const useGetReply = () => {
  return useSelector(() => replyTo.get());
};
const useIsReply = (id) => {
  return useSelector(() => replyTo.commentID.get() === id);
};
const changeReplyComment = (n, dis, pid, cmid) => {
  unReply();
  replyTo.assign({ show: n, displayname: dis, parentID: pid, commentID: cmid });
};
const unReply = () => {
  replyTo.assign({
    show: null,
    displayname: null,
    parentID: null,
    commentID: null,
  });
};
const successAddComment = (pid) => {
  replyTo.successPID.set(pid);
};
const useSuccessPID = (id) => {
  return useSelector(() => replyTo.successPID.get() === id);
};

export {
  useListVideoStates,
  toggleCommentSection,
  changeCurrentElement,
  useGetReply,
  useIsReply,
  changeReplyComment,
  unReply,
  successAddComment,
  useSuccessPID,
};
