import { clientID } from '@/templates/global/ClientData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const UpsertAvatar = async (file) => {
  const client = clientID.peek();

  //* upsert vào database
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(`${client}.png`, file, {
      upsert: true,
    });

  if (error) throw new Error(error);

  //*nếu thành công và là add thì thêm link vào field
  const url = `https://utpupcffsaillsgoohtt.supabase.co/storage/v1/object/public/avatars/${client}.png`;
  await supabase.from('profiles').update({ avatar_url: url }).eq('id', client);

  //* trả lại file media ảnh
  return data;
};
const useMutateAvatar = (changeLocalAvatar) => {
  const queryClient = useQueryClient();
  const client = clientID.peek();

  return useMutation(UpsertAvatar, {
    onSuccess: (_, file) => {
      queryClient.setQueryData(['get_user_data', client], (prev) => {
        changeLocalAvatar(URL.createObjectURL(file));

        const date = new Date().toISOString();

        if (prev.avatar_url) return;
        return {
          ...prev,
          avatar_url: `https://utpupcffsaillsgoohtt.supabase.co/storage/v1/object/public/avatars/${client}.png?lastmod=${date}`,
        };
      });
    },
  });
};

const updateProfleField = async (props) => {
  const client = clientID.peek();

  const { username, displayname, bio } = props;

  const { error } = await supabase
    .from('profiles')
    .update({ username: username, displayname: displayname, bio: bio })
    .eq('id', client);

  if (error) throw new Error(error);
};
const useMutateProfileField = () => {
  const client = clientID.peek();
  const queryClient = useQueryClient();

  return useMutation(updateProfleField, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get_user_data', client]);
    },
  });
};

export { useMutateAvatar, useMutateProfileField };
