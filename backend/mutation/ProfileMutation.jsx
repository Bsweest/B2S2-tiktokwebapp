import { clientID } from '@/templates/global/ClientData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../supabase';

const UpsertAvatar = async (client, file, isAdd) => {
  // const queryClient = useQueryClient();
  //* upsert vào database
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(`${client}.png`, file, {
      upsert: true,
    });

  if (error) throw new Error(error);

  //*nếu thành công và là add thì thêm link vào field
  const url = `https://utpupcffsaillsgoohtt.supabase.co/storage/v1/object/public/avatars/${client}.png`;
  if (isAdd) {
    await supabase
      .from('profiles')
      .update({ avatar_url: url })
      .eq('id', client);
  }

  //* chỉnh lại data của client user ở local
  // queryClient.setQueryData(['get_user_data', client], (prev) => ({
  //   ...prev,
  //   avatar_url: url,
  // }));
  //* trả lại file media ảnh
  console.log('data', data);
  return data;
};

const updateProfleField = async (props) => {
  const { field, value, client } = props;

  const { data, error } = await supabase
    .from('profiles')
    .update({ [field]: value })
    .eq('id', client);

  if (error) throw new Error(error);

  return data;
};
const useMutateProfileField = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProfleField, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get_user_data', clientID.peek()]);
    },
  });
};

export { UpsertAvatar, useMutateProfileField };
