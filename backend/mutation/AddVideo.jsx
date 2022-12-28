import { clientID } from '@/templates/global/ClientData';
import { supabase } from 'backend/supabase';

const AddVideo = async (file, caption) => {
  const client = clientID.peek();

  const { data } = await supabase
    .from('shareshorts')
    .insert({
      op_id: client,
      caption: caption,
      uri: '',
    })
    .select()
    .single();

  if (!data) return false;

  const { error } = await supabase.storage
    .from('shareshorts')
    .upload(`${data.id}.mp4`, file, {
      upsert: true,
    });

  if (error) {
    await supabase.from('shareshorts').delete().eq('id', data.id);
    return;
  }
};

export default AddVideo;
