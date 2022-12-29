import { useObservable, useSelector } from '@legendapp/state/react';
import { useQueryClient } from '@tanstack/react-query';
import useMutateBookmark from 'backend/mutation/BookmarkMutate';
import { useMutateHeartShort } from 'backend/mutation/HeartMutate';
import { useCallback, useEffect, useMemo } from 'react';

import { CheckAuth } from '../global/CheckAuth';
import {
  toggleCommentSection,
  useListVideoStates,
} from '../global/ListVideoStates';

const useKeyboardControl = () => {
  const {
    currentElement: { id: ssid, op_id },
  } = useListVideoStates();
  const queryClient = useQueryClient();

  const keyboardControls = useObservable({
    comment: false,
    heart: false,
    bookmark: false,
  });

  const { comment, heart, bookmark } = useSelector(() =>
    keyboardControls.get(),
  );

  const { mutate: updateHeart } = useMutateHeartShort();
  const { mutate: updateBM } = useMutateBookmark();

  const map = useMemo(
    () => ({
      KeyC: 'comment',
      KeyH: 'heart',
      KeyB: 'bookmark',
    }),
    [],
  );

  const getField = useCallback((value) => map[value], [map]);

  const handleKeyPress = useCallback(
    ({ code }) => {
      if (document.activeElement.nodeName.toLowerCase() === 'input') return;
      keyboardControls[getField(code)].set(true);
    },
    [getField, keyboardControls],
  );

  const handleKeyUp = useCallback(
    ({ code }) => {
      if (document.activeElement.nodeName.toLowerCase() === 'input') return;
      keyboardControls[getField(code)].set(false);
    },
    [getField, keyboardControls],
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', handleKeyUp);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyPress, handleKeyUp]);

  useEffect(() => {
    if (!heart) return;
    if (!CheckAuth()) return;

    const { hs } = queryClient.getQueryData(['short_services', ssid]);
    updateHeart({ ssid: ssid, bool: !hs, op_id: op_id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heart]);

  useEffect(() => {
    if (!bookmark) return;
    if (!CheckAuth()) return;

    const { bm } = queryClient.getQueryData(['short_services', ssid]);
    updateBM({ ssid: ssid, bool: !bm });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmark]);

  useEffect(() => {
    if (comment) toggleCommentSection();
  }, [comment]);
};

export { useKeyboardControl };
