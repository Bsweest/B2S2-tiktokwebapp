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

export { useQuerySingleVideo, useQueryFeedExplore };
