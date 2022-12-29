import { clientID } from '@/templates/global/ClientData';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { supabase } from '../supabase';

const UpdateHeartShort = async (props) => {
  const { ssid, bool, op_id } = props;
  const client = clientID.peek();

  const { error } = bool
    ? await supabase
        .from('_heart_short')
        .insert({ uid: client, ssid: ssid, op_id: op_id })
    : await supabase
        .from('_heart_short')
        .delete()
        .match({ uid: client, ssid: ssid });

  if (error) throw new Error(error);
};

const useMutateHeartShort = () => {
  const queryClient = useQueryClient();

  return useMutation(UpdateHeartShort, {
    onSuccess: (_, { ssid }) => {
      queryClient.setQueryData(
        ['short_services', ssid],
        ({ bm, count_comment, count_heart, hs }) => ({
          bm: bm,
          count_comment: count_comment,
          hs: !hs,
          count_heart: !hs ? ++count_heart : --count_heart,
        }),
      );
    },
  });
};

const UpdateHeartComment = async (props) => {
  const { cmid, bool } = props;
  const client = clientID.peek();

  bool
    ? await supabase.from('_heart_comment').insert({ uid: client, cmid: cmid })
    : await supabase
        .from('_heart_comment')
        .delete()
        .match({ uid: client, cmid: cmid });
};

const useMutateHeartComment = () => {
  const queryClient = useQueryClient();

  return useMutation(UpdateHeartComment, {
    onSuccess: (_, { cmid }) => {
      queryClient.setQueryData(
        ['comment_services', cmid],
        ({ hc, count_heart }) => ({
          hc: !hc,
          count_heart: !hc ? ++count_heart : --count_heart,
        }),
      );
    },
  });
};

export { useMutateHeartShort, useMutateHeartComment };
