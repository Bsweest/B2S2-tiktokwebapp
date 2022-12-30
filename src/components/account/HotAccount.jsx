import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import useQueryUserData from 'backend/services/ProfileServices';
import Link from 'next/link';

const HotAccount = ({ data: top_id }) => {
  const { data, isSuccess } = useQueryUserData(top_id);

  return (
    <Link href={`/${top_id}`}>
      {isSuccess ? (
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src={data.avatar_url}
              sx={{ width: '35px', height: '35px' }}
            />
          </ListItemIcon>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
              {data.username}
            </Typography>
            <Typography sx={{ fontSize: '12px' }}>
              {data.displayname}
            </Typography>
          </Box>
        </ListItemButton>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default HotAccount;
