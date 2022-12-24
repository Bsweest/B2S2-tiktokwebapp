import { clientID } from '@/templates/global/ClientData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const updateFollow = async (props) => {
  const { op_id, bool } = props;
  const client = clientID.peek();

  const { error } = bool
    ? await supabase
        .from('_follow')
        .insert({ uid: client, following_id: op_id })
    : await supabase
        .from('_follow')
        .delete()
        .match({ uid: client, following_id: op_id });

  if (error) throw new Error(error);
};

const useMutateFollow = () => {
  const queryClient = useQueryClient();

  return useMutation(updateFollow, {
    onSuccess: (_, { op_id }) => {
      queryClient.setQueryData(['is_following', op_id], (prev) => !prev);
    },
  });
};

export default useMutateFollow;
