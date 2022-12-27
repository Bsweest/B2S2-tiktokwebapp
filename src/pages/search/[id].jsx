import AccountSearchResult from '@/components/account/AccountSearchResult';
import VideoSearchResult from '@/components/shortvideo/video_search_result';
import SideBarHome from '@/components/sidebar/SideBarHome';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          {result ? (
            <>
              <AccountSearchResult />
              <AccountSearchResult />
              <AccountSearchResult />
              <AccountSearchResult />
              <AccountSearchResult />
              <AccountSearchResult />
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
          {result ? (
            <>
              <Stack direction={'row'} spacing={4}>
                <VideoSearchResult />
                <VideoSearchResult />
                <VideoSearchResult />
                <VideoSearchResult />
              </Stack>
              <Stack direction={'row'} spacing={{ xs: 1, sm: 2, md: 4 }}>
                <VideoSearchResult />
                <VideoSearchResult />
                <VideoSearchResult />
                <VideoSearchResult />
              </Stack>
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
