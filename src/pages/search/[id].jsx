import AccountSearchResult from '@/components/account/AccountSearchResult';
import VideoSearchResult from '@/components/shortvideo/video_search_result';
import SideBarHome from '@/components/sidebar/SideBarHome';
import { Avatar, Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { supabase } from 'backend/supabase';
import FlatList from 'flatlist-react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [resultAccount, setResultAccount] = useState([]);
  const [resultVideo, setResultVideo] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAccountByName = async () => {
    const result = await supabase
      .from('profiles')
      .select()
      .like('username', `%${id}%`);
    if (result.data[0]) setResultAccount(result.data);
    else setResultAccount([]);
  };

  const getVideoByCaption = async () => {
    const result = await supabase
      .from('shareshorts')
      .select()
      .like('caption', `%${id}%`);
    if (result.data[0]) setResultVideo(result.data);
    else setResultVideo([]);
  };

  const renderAccount = (item) => {
    return <AccountSearchResult data={item} key={item.id} />;
  };

  const renderVideo = (item) => {
    return <VideoSearchResult data={item} key={item.id} />;
  };

  useEffect(() => {
    getAccountByName();
    getVideoByCaption();
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
        <Box sx={{ width: '90%', borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              sx={{
                textTransform: 'none',
                width: '200px',
                fontSize: '16px',
              }}
              label="Accounts"
            />
            <Tab
              sx={{
                textTransform: 'none',
                width: '200px',
                fontSize: '16px',
              }}
              label="Videos"
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          {resultAccount ? (
            <>
              <FlatList list={resultAccount} renderItem={renderAccount} />
            </>
          ) : (
            <Typography
              sx={{ padding: '10px', fontSize: '18px', color: '#9f9f9f' }}
            >
              No result
            </Typography>
          )}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {resultVideo ? (
            <>
              <FlatList
                list={resultVideo}
                renderItem={renderVideo}
                display={{
                  grid: true,
                  gridGap: '35px',
                }}
              />
            </>
          ) : (
            <Typography
              sx={{ padding: '10px', fontSize: '18px', color: '#9f9f9f' }}
            >
              No result
            </Typography>
          )}
        </TabPanel>
      </Box>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: '90%', marginTop: '12px' }}>{children}</Box>
      )}
    </div>
  );
}

export default Search;
