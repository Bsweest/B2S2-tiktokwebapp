import AccountSearchResult from '@/components/account/AccountSearchResult';
import SideBarHome from '@/components/sidebar/SideBarHome';
import { Avatar, Box } from '@mui/material';
import { supabase } from 'backend/supabase';
import FlatList from 'flatlist-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Following = () => {
  const [resultAccount, setResultAccount] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  const getAccount = async () => {
    const arr = [];
    const result = await supabase.from('_follow').select().eq('uid', id);
    for (let i = 0; i < result.data.length; i++) {
      const data = await supabase
        .from('profiles')
        .select()
        .eq('id', result.data[i].following_id);
      arr.push(data.data[0]);
    }
    if (arr) setResultAccount(arr);
    else setResultAccount([]);
  };

  const renderAccount = (item) => {
    return <AccountSearchResult data={item} key={item.id} />;
  };

  useEffect(() => {
    getAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Box
      className="flex row"
      sx={{
        flex: 1,
      }}
    >
      <SideBarHome />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ marginTop: '12px', width: '90%' }}>
          <FlatList list={resultAccount} renderItem={renderAccount} />
        </Box>
      </Box>
    </Box>
  );
};

export default Following;
