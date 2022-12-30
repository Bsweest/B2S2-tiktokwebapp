import { clientID } from '@/templates/global/ClientData';
import { useQuery } from '@tanstack/react-query';

import { supabase } from '../supabase';

//* Get Single Video
const getVideo = async (ssid) => {
  const { data, error } = await supabase
    .from('shareshorts')
    .select()
    .eq('id', ssid)
    .limit(1)
    .single();

  return data;
};
const useQuerySingleVideo = (ssid) => {
  return useQuery(['single_video', ssid], () => getVideo(ssid));
};

//* Get explore newfeed
const getExplore = async () => {
  const { data } = await supabase
    .from('shareshorts')
    .select()
    .order('created_at', {
      ascending: false,
    });

  return data;
};
const useQueryFeedExplore = () => {
  return useQuery(['explore_feed'], getExplore);
};

const getClientFollowShort = async (client) => {
  const { data } = await supabase.rpc('get_follow_short', {
    client_id: client,
  });

  return data;
};

const useQueryFollowShort = () => {
  const client = clientID.get();
  return useQuery(
    ['get_follow_short', client],
    () => getClientFollowShort(client),
    {
      placeholderData: [],
    },
  );
};

export { useQuerySingleVideo, useQueryFeedExplore, useQueryFollowShort };
