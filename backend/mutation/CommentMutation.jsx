import { clientID } from '@/templates/global/ClientData';
import { successAddComment } from '@/templates/global/ListVideoStates';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const addComment = async (props) => {
  const { content, p_id, ssid, reply_to } = props;
  const op = clientID.peek();

  const { data, error } = await supabase
    .from('comments')
    .insert({
      content: content,
      uid: op,
      parent_id: p_id,
      ssid: ssid,
      reply_to: reply_to,
    })
    .select()
    .limit(1)
    .single();

  if (error) throw new Error(error);

  return data;
};

const useMutateComment = () => {
  const queryClient = useQueryClient();

  return useMutation(addComment, {
    onSuccess: (data, {}) => {
      queryClient.setQueryData(
        ['get_comments', data.ssid, data.parent_id],
        (prev) => {
          return [...prev, data];
        },
      );
      if (data.parent_id) {
        queryClient.invalidateQueries(['cnt_childcomment', data.parent_id]);
        successAddComment(data.parent_id);
      }
    },
  });
};

export default useMutateComment;
