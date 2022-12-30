import { clientID } from '@/templates/global/ClientData';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from 'backend/supabase';

const AddVideo = async (file, caption, poster, music) => {
  const client = clientID.peek();

  const { data } = await supabase
    .from('shareshorts')
    .insert({
      op_id: client,
      caption: caption,
      music: music,
      uri: '',
    })
    .select()
    .single();

  if (!data) return false;

  if (poster) {
    const { error } = await supabase
      .from('shareshorts')
      .update({
        poster_uri: `https://utpupcffsaillsgoohtt.supabase.co/storage/v1/object/public/shareshorts/${data.id}/poster.png`,
      })
      .eq('id', data.id);

    await supabase.storage
      .from('shareshorts')
      .upload(`${data.id}/poster.png`, poster, {
        upsert: true,
      });
  }

  const { error } = await supabase.storage
    .from('shareshorts')
    .upload(`${data.id}/video.mp4`, file, {
      upsert: true,
    });

  if (error) {
    await supabase.from('shareshorts').delete().eq('id', data.id);
    return false;
  }

  return data.id;
};

export const deleteVideo = async (ssid) => {
  await supabase.from('shareshorts').delete().eq('id', ssid);

  await supabase.storage.from('shareshorts').remove([ssid]);
};

const updateVideo = async (props) => {
  const { id, poster, music, caption } = props;

  const { error } = await supabase
    .from('shareshorts')
    .update({
      music: music,
      caption: caption,
    })
    .eq('id', id);

  if (poster) {
    await supabase.storage
      .from('shareshorts')
      .upload(`${id}/poster.png`, poster, {
        upsert: true,
      });
  }

  if (error) throw new Error(error);
};

export const useMutateVideo = () => {
  const queryClient = useQueryClient();

  return useMutation(updateVideo, {
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['single_short', id]);
    },
  });
};

export default AddVideo;
