import { clientID } from '@/templates/global/ClientData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const UpdateBookmark = async (props) => {
  const { ssid, bool } = props;
  const client = clientID.peek();

  const { error } = bool
    ? await supabase.from('_bookmark').insert({ uid: client, ssid: ssid })
    : await supabase
        .from('_bookmark')
        .delete()
        .match({ uid: client, ssid: ssid });

  if (error) throw new Error(error);
};

const useMutateBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation(UpdateBookmark, {
    onSuccess: (_, { ssid }) => {
      queryClient.setQueryData(['short_services', ssid], (prev) => ({
        ...prev,
        bm: !prev.bm,
      }));
    },
  });
};

export default useMutateBookmark;
