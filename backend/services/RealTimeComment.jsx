import { clientID } from '@/templates/global/ClientData';
import { pushNoti } from '@/templates/global/NotificationPersist';
import { v4 } from 'uuid';

import { supabase } from '../supabase';

const useListenCommentSection = () => {
  const client_id = clientID.get();

  supabase
    .channel(`public:comments:op_id=eq.${client_id}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'comments',
        filter: `op_id=eq.${client_id}`,
      },
      (payload) => {
        pushNoti({
          id: v4(),
          uid: payload.uid,
          ssid: payload.ssid,
          event: 0,
          content: payload.content,
          at: payload.created_at,
        });
      },
    )
    .subscribe();
};

export default useListenCommentSection;
