import { clientID } from '@/templates/global/ClientData';
import { useQuery } from '@tanstack/react-query';

import { supabase } from '../supabase';

//* Get All comment
const GetComments = async (fetchID, pid, ac) => {
  const { data, error } = pid
    ? await supabase
        .rpc('get_children_comments', {
          p_id: pid,
        })
        .abortSignal(ac.signal)
    : await supabase
        .rpc('get_parent_comments', {
          ss_id: fetchID,
        })
        .abortSignal(ac.signal);

  if (error) throw new Error(error);

  return data;
};
const useQueryCommentSection = (fetchID, pid, ac, isOpen) => {
  return useQuery(
    ['get_comments', fetchID, pid],
    () => GetComments(fetchID, pid, ac),
    { enabled: isOpen },
  );
};

//* Check Heart Comment
const CommentServices = async (cmid) => {
  const client = clientID.peek();

  const { data, error } = await supabase.rpc('comment_services', {
    cm_id: cmid,
    client_id: client,
  });

  if (error) throw new Error(error);

  return data;
};
const useQueryCommentServices = (cmid) => {
  return useQuery(['comment_services', cmid], () => CommentServices(cmid));
};

//* Get number of Child comment
const GetCountChildComment = async (pid) => {
  const { count, error } = await supabase
    .from('comments')
    .select('*', { count: 'exact' })
    .eq('parent_id', pid);

  if (error) throw new Error(error);

  return count;
};
const useQueryCountChildComment = (pid) => {
  return useQuery(['cnt_childcomment', pid], () => GetCountChildComment(pid), {
    placeholderData: 0,
  });
};

export {
  GetComments,
  useQueryCommentSection,
  useQueryCommentServices,
  useQueryCountChildComment,
};
