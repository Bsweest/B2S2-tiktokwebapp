import { clientID } from '@/templates/global/ClientData';
import { successAddComment } from '@/templates/global/ListVideoStates';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const addComment = async (props) => {
  const { content, p_id, fetchID, reply_to } = props;
  const client = clientID.peek();

  const { data, error } = await supabase
    .from('comments')
    .insert({
      content: content,
      uid: client,
      parent_id: p_id,
      ssid: fetchID,
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
      if (data.parent_id) {
        queryClient.invalidateQueries(['cnt_childcomment', data.parent_id]);
        successAddComment(data.parent_id);
      }
      queryClient.setQueryData(
        ['get_comments', data.ssid, data.parent_id],
        (prev) => {
          if (prev) {
            return [...prev, data];
          } else return [data];
        },
      );
    },
  });
};

export default useMutateComment;
