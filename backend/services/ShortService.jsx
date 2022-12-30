import { clientID } from '@/templates/global/ClientData';
import { useQuery } from '@tanstack/react-query';

import { supabase } from '../supabase';

/**
 * @param ssid
 * @returns {bm, hs, count_heart, count_comment}
 */

const GetShortData = async (ssid) => {
  const client = clientID.peek();

  const { data } = await supabase.rpc('short_services', {
    client: client,
    short_id: ssid,
  });

  return data;
};
const useQueryShortServives = (ssid) => {
  return useQuery(['short_services', ssid], () => GetShortData(ssid));
};

const getTopFollow = async () => {
  const { data, error } = await supabase.rpc('get_top_follow');

  if (error) throw new Error(error);

  return data;
};

export const useQueryTopFollow = () => {
  return useQuery(['top_follow'], getTopFollow, {
    placeholderData: [],
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};

export default useQueryShortServives;
