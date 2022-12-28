import { clientID } from '@/templates/global/ClientData';
import { useQuery } from '@tanstack/react-query';

import { supabase } from '../supabase';

//* get all chat rooms
const GetChatRooms = async (client, bool) => {
  const { data, error } = await supabase.rpc('get_chatrooms', {
    client: client,
    is_friend: bool,
  });

  return data;
};
const useQueryChatRooms = (bool) => {
  const client = clientID.get();

  return useQuery(
    ['chat_rooms', client, bool],
    () => GetChatRooms(client, bool),
    {
      placeholderData: [],
      staleTime: 0,
    },
  );
};

//* Get last Messages of Chatroom
const GetLastMessage = async (room_id) => {
  const client = clientID.peek();

  const { data, error } = await supabase.rpc('get_last_message', {
    rmid: room_id,
    client: client,
  });

  return data;
};
const useQueryLastMessage = (room_id) => {
  return useQuery(
    ['get_last_message', room_id],
    () => GetLastMessage(room_id),
    {
      placeholderData: {
        content: '',
        id: null,
        last_read_id: null,
      },
      staleTime: 0,
    },
  );
};

//* get messages of chat room
const GetInfiniteMessages = async (room_id) => {
  if (!room_id) return null;

  const { data, error } = await supabase
    .from('messages')
    .select()
    .eq('room_id', room_id)
    .order('created_at', { ascending: false });

  return data;
};
const useQueryInfiniteMessages = (room_id) => {
  return useQuery(
    ['get_chatroom', room_id],
    () => GetInfiniteMessages(room_id),
    {
      placeholderData: [],
      staleTime: 0,
    },
  );
};

//* Create Chat room and Add participant
const createRoom = async (op_id) => {
  const client = clientID.peek();

  const { data } = await supabase
    .from('chatrooms')
    .insert({})
    .select()
    .single();

  await supabase.from('chat_parti').insert([
    { room_id: data.id, parti_id: client },
    { room_id: data.id, parti_id: op_id },
  ]);

  return data.id;
};

export {
  useQueryChatRooms,
  useQueryLastMessage,
  useQueryInfiniteMessages,
  createRoom,
};
