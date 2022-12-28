import { useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const useListenChatroom = (room_id) => {
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
        queryClient.invalidateQueries(['get_chat_messages', room_id]);
        queryClient.invalidateQueries(['get_last_message', room_id]);
      },
    )
    .subscribe();
};

export default useListenChatroom;
