import { useFocusedRoomId } from '@/templates/global/ChatRoomInFocused';
import { clientID } from '@/templates/global/ClientData';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const SendChat = async (props) => {
  const { content, room_id } = props;
  const sender = clientID.peek();

  const { error } = await supabase.from('messages').insert({
    content: content,
    sender: sender,
    room_id: room_id,
  });

  if (error) throw new Error(error);
};

const useMutateChat = () => {
  return useMutation(SendChat);
};

const ChangeReadStatus = async (props) => {
  const client = clientID.peek();
  const { room_id, messID } = props;

  const { error } = await supabase
    .from('chat_parti')
    .update({ last_read_id: messID })
    .match({
      room_id: room_id,
      parti_id: client,
    });

  if (error) throw new Error(error);
};

const useMutateLastReadMess = () => {
  const queryClient = useQueryClient();
  const fcID = useFocusedRoomId();

  return useMutation(ChangeReadStatus, {
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['get_last_message', fcID], (prev) => ({
        ...prev,
        last_read_id: fcID ? variables.messID : prev.last_read_id,
      }));
    },
  });
};

export { useMutateChat, useMutateLastReadMess };
