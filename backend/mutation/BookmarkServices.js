import { clientID } from '@/templates/global/ClientData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const updateBookmark = async (props) => {
  const { ssid, bool } = props;
  const client = clientID.peek();

  bool
    ? await supabase.from('_bookmark').insert({ uid: client, ssid: ssid })
    : await supabase
        .from('_bookmark')
        .delete()
        .match({ uid: client, ssid: ssid });
};

const mutateBookmark = (ssid) => {
  const queryClient = useQueryClient();

  return useMutation(updateBookmark, {
    onMutate: () => {
      queryClient.setQueryData(['short_services', ssid], (old) => ({
        ...old,
        bm: !old.bm,
      }));
    },
  });
};

export default mutateBookmark;
