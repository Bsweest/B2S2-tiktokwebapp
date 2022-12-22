import { useFocusedRoomId } from '@/templates/global/ChatRoomInFocused';
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
      (payload) => {
        queryClient.setQueryData(['get_chat_messages', room_id], (old) => [
          payload.new,
          ...old,
        ]);

        queryClient.setQueryData(
          ['get_last_message', room_id],
          ({ last_read_id }) => ({
            ...payload.new,
            last_read_id: last_read_id,
          }),
        );
      },
    )
    .subscribe();
};

export default useListenChatroom;
