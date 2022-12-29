import { clientID } from '@/templates/global/ClientData';
import { successAddComment } from '@/templates/global/ListVideoStates';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const SendChat = async (props) => {
  const { content, room_id, receiver } = props;
  const sender = clientID.peek();

  const { error } = await supabase.from('messages').insert({
    content: content,
    sender: sender,
    room_id: room_id,
    receiver: receiver,
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
  return useMutation(ChangeReadStatus, {
    onSuccess: (_, { room_id }) => {
      queryClient.invalidateQueries(['get_last_message', room_id]);
    },
  });
};

export { useMutateChat, useMutateLastReadMess };
