import { clientID } from '@/templates/global/ClientData';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { supabase } from '../supabase';

const useListenChatroom = (room_id, currentID) => {
  const queryClient = useQueryClient();

  supabase
    .channel(`public:messages:room_id=eq.${room_id}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `room_id=eq.${room_id}`,
      },
      () => {
        queryClient.invalidateQueries(['get_last_message', room_id]);

        if (room_id === currentID)
          queryClient.invalidateQueries(['get_chatroom', room_id]);
      },
    )
    .subscribe();
};

export const useListenToAllChat = (AddNoti, resetNoti) => {
  const client = clientID.get();
  const router = useRouter();

  const needListener = !(
    router.pathname === '/messages/[id]' || router.pathname === '/messages'
  );

  useEffect(() => {
    if (!needListener) resetNoti();
  }, [needListener, resetNoti]);

  supabase
    .channel(`public:messages:receiver=eq.${needListener ? client : null}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `receiver=eq.${needListener ? client : null}`,
      },
      (payload) => {
        AddNoti(payload);
      },
    )
    .subscribe();
};

export default useListenChatroom;
