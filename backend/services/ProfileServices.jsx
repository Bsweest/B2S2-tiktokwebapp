import { useQuery } from 'react-query';

import { clientID } from '../../src/templates/global/ClientData';
import { supabase } from '../supabase';

//Get User Data
const getUserData = async (uid) => {
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', uid)
    .limit(1)
    .single();

  return data;
};

const useQueryUserData = (uid) => {
  return useQuery(['get_user_data', uid], () => getUserData(uid), {
    placeholderData: {
      avatar_url: '',
    },
  });
};
const ClientData = () => {
  const uid = clientID.get();

  return useQuery(['get_user_data', op_id], () => getUserData(op_id), {
    placeholderData: {
      avatar_url: '',
    },
  });
};

//* Get Following, Follower, Number of heart
const GetInteractNumbers = async (op_id) => {
  const { data, error } = await supabase.rpc('get_interact_numbers', {
    pf_id: op_id,
  });

  if (error) throw new Error(error);

  return data;
};
const useQueryInteractNumbers = (op_id) => {
  return useQuery(['get_interact_numbers', op_id], () =>
    GetInteractNumbers(op_id),
  );
};

//* Get all short videos of user
const GetShortsOfUser = async (op_id) => {
  const { data, error } = await supabase
    .from('shareshorts')
    .select()
    .eq('op_id', op_id);

  return data;
};
const useQueryShortsOfUser = (op_id) => {
  return useQuery(['get_user_shorts', op_id], () => GetShortsOfUser(op_id));
};

//* Get shorts that user like
const GetLikedShorts = async (op_id) => {
  const { data, error } = await supabase.rpc('get_liked_shorts', {
    props_id: op_id,
  });

  return data;
};
const useQueryLikedShorts = (op_id) => {
  return useQuery(['get_liked_shorts', op_id], () => GetLikedShorts(op_id));
};

//* Get shorts that user bookmark
const GetMarkedShorts = async (op_id) => {
  const { data, error } = await supabase.rpc('get_marked_shorts', {
    props_id: op_id,
  });

  return data;
};
const useQueryMarkedShorts = (op_id) => {
  return useQuery(['get_marked_shorts', op_id], () => GetMarkedShorts(op_id));
};

//* Check Follow
const isFollowingOP = async (op_id) => {
  const client = clientID.get();

  const { data, error } = await supabase.rpc('is_following', {
    client: client,
    op_id: op_id,
  });

  return data;
};
const useQueryCheckFollow = (op_id) => {
  return useQuery(['is_following', op_id], () => isFollowingOP(op_id));
};

//* Check Follow back
const IsFollowingBack = async (op_id) => {
  const client = clientID.get();

  const { data, error } = await supabase.rpc('is_following', {
    client: op_id,
    op_id: client,
  });

  return data;
};
const useQueryCheckFollowBack = (op_id) => {
  return useQuery(['is_following_back', op_id], () => IsFollowingBack(op_id));
};

export {
  useQueryShortsOfUser,
  useQueryInteractNumbers,
  useQueryCheckFollow,
  useQueryCheckFollowBack,
  useQueryLikedShorts,
  useQueryMarkedShorts,
  ClientData,
};

export default useQueryUserData;