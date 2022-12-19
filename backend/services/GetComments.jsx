import { useQuery } from 'react-query';

import { clientID } from '../../src/templates/global/ClientData';
import { supabase } from '../supabase';

//* Get All comment
const GetComments = async (fetchID, pid, ac) => {
  const { data, error } = await supabase
    .rpc('get_comments', {
      ss_id: fetchID,
      p_id: pid,
    })
    .abortSignal(ac.signal);

  return data;
};
const useQueryCommentSection = (fetchID, pid, ac, isOpen) => {
  return useQuery(
    ['comment_section', fetchID, pid],
    () => GetComments(fetchID, pid, ac),
    { enabled: isOpen },
  );
};

//* Check Heart Comment
const IsHeartComment = async (cmid) => {
  const client = clientID.get();

  const { data, error } = await supabase.rpc('is_heart_comment', {
    client: client,
    comment_id: cmid,
  });

  return data;
};
const useQueryCheckHeartComment = (cmid) => {
  return useQuery(['comment_services', cmid], () => IsHeartComment(cmid));
};

//* Get number of Child comment
const GetCountChildComment = async (pid) => {
  const { count, error } = await supabase
    .from('comments')
    .select('*', { count: 'exact' })
    .eq('parent_id', pid);

  return count;
};
const useQueryCountChildComment = (pid) => {
  return useQuery(['cnt_childcomment', pid], () => GetCountChildComment(pid));
};

export {
  GetComments,
  useQueryCommentSection,
  useQueryCheckHeartComment,
  useQueryCountChildComment,
};
