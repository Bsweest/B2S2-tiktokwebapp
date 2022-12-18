import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const HotAccount = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Avatar
          src="https://randomuser.me/api/portraits/men/27.jpg"
          sx={{ width: '35px', height: '35px' }}
        />
      </ListItemIcon>
      <ListItemText
        primary="NguyễnVan"
        primaryTypographyProps={{ fontWeight: 'bold', fontSize: '0.9rem' }}
      />
    </ListItemButton>
  );
};

export default HotAccount;
