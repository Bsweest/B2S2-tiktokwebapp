import { Box, Tab, Tabs } from '@mui/material';
import {
  useQueryLikedShorts,
  useQueryMarkedShorts,
  useQueryShortsOfUser,
} from 'backend/services/ProfileServices';
import { useState } from 'react';

import ListVideoItems from './VideoItems';

const TabList = ({ uid }) => {
  const [value, setValue] = useState(0);

  const { data: own } = useQueryShortsOfUser(uid);
  const { data: like } = useQueryLikedShorts(uid);
  const { data: mark } = useQueryMarkedShorts(uid, true);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            sx={{
              textTransform: 'none',
              width: '200px',
              fontSize: '18px',
            }}
            label="Videos"
          />
          <Tab
            sx={{
              textTransform: 'none',
              width: '200px',
              fontSize: '18px',
            }}
            label="Liked"
          />
          {true && (
            <Tab
              sx={{
                textTransform: 'none',
                width: '200px',
                fontSize: '18px',
              }}
              label="Bookmarked"
            />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ListVideoItems list={own} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListVideoItems list={like} />
      </TabPanel>
      {true && (
        <TabPanel value={value} index={2}>
          <ListVideoItems list={mark} />
        </TabPanel>
      )}
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: '5px' }}>{children}</Box>}
    </div>
  );
};

export default TabList;
