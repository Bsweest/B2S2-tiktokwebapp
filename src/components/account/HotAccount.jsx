import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const HotAccount = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Avatar src="https://randomuser.me/api/portraits/men/27.jpg" />
      </ListItemIcon>
      <ListItemText
        disableTypography
        style={{ fontWeight: 'bold', fontSize: 14 }}
        primary="datvilla94"
      />
    </ListItemButton>
  );
};

export default HotAccount;
