import { useQuery } from 'react-query';

import { clientID } from '../../src/templates/global/ClientData';
import { supabase } from '../supabase';

/**
 * @param ssid
 * @returns {bm, hs, count_heart, count_comment}
 */

const GetShortData = async (ssid) => {
  const client = clientID.get();

  const { data } = await supabase.rpc('short_services', {
    client: client,
    short_id: ssid,
  });

  return data;
};
const useQueryShortServives = (ssid) => {
  return useQuery(['short_services', ssid], () => GetShortData(ssid));
};

export default useQueryShortServives;
