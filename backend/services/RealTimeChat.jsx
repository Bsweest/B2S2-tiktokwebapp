import { clientID } from '@/templates/global/ClientData';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { supabase } from '../supabase';
import { getUserData } from './ProfileServices';

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

export const useListenToAllChat = (AddNoti) => {
  const client = clientID.get();
  const router = useRouter();

  const needListener = !(
    router.pathname === '/messages/[id]' || router.pathname === '/messages'
  );

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
      async (payload) => {
        const data = await getUserData(payload.sender);
        AddNoti(data.displayname);
      },
    )
    .subscribe();
};

export default useListenChatroom;
