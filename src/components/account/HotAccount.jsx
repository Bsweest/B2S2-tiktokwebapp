import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';

const HotAccount = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Avatar
          src="https://randomuser.me/api/portraits/women/82.jpg"
          sx={{ width: '35px', height: '35px' }}
        />
      </ListItemIcon>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
          phuongchi09
        </Typography>
        <Typography sx={{ fontSize: '12px' }}>Phuong Chi</Typography>
      </Box>
    </ListItemButton>
  );
};

export default HotAccount;
