import { clientID } from '@/templates/global/ClientData';

import { supabase } from '../supabase';

const ListenCommentSection = () => {
  const client_id = clientID.get();

  supabase
    .channel(`public:comments:uid=eq.${client_id}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'comments',
        filter: `uid=eq.${client_id}`,
      },
      (payload) => {},
    )
    .subscribe();
};

export default ListenCommentSection;
