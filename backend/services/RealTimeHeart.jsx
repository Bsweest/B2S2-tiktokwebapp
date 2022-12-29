import { clientID } from '@/templates/global/ClientData';
import { pushNoti } from '@/templates/global/NotificationPersist';
import { v4 } from 'uuid';

import { supabase } from '../supabase';

const useListenCommentSection = () => {
  const client_id = clientID.get();

  supabase
    .channel(`public:_heart_short:op_id=eq.${client_id}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'heart_short',
        filter: `op_id=eq.${client_id}`,
      },
      (payload) => {
        pushNoti({
          id: v4(),
          uid: payload.uid,
          ssid: payload.ssid,
          event: 1,
          content: null,
          at: new Date().toString(),
        });
      },
    )
    .subscribe();
};

export default useListenCommentSection;
