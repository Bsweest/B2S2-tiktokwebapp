import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

const AccountSearchResult = () => {
  return (
    <ListItemButton sx={{ height: '120px', borderBottom: '1px solid #2e2e2e' }}>
      <ListItemIcon>
        <Avatar
          src="https://randomuser.me/api/portraits/women/82.jpg"
          sx={{ width: '75px', height: '75px' }}
        />
      </ListItemIcon>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '25px' }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
          phuongchi09 ✓
        </Typography>
        <Box className="flex row" sx={{ gap: '10px' }}>
          <Typography sx={{ fontSize: '16px', color: '#9f9f9f' }}>
            Phuong Chi
          </Typography>
          <Typography sx={{ fontSize: '17px', fontWeight: 'bold' }}>
            99
          </Typography>
          <Typography sx={{ fontSize: '16px', color: '#9f9f9f' }}>
            Followers
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '16px', color: '#9f9f9f' }}>
          Yêu màu hồng
        </Typography>
      </Box>
    </ListItemButton>
  );
};

export default AccountSearchResult;
