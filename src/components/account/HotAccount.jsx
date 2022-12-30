import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const HotAccount = ({ data }) => {
  const { id, username, displayname, avatar_url, bio } = data;
  return (
    <Link href={`/${id}`}>
      <ListItemButton>
        <ListItemIcon>
          <Avatar src={avatar_url} sx={{ width: '35px', height: '35px' }} />
        </ListItemIcon>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
            {username}
          </Typography>
          <Typography sx={{ fontSize: '12px' }}>{displayname}</Typography>
        </Box>
      </ListItemButton>
    </Link>
  );
};

export default HotAccount;
