import NotificationsActiveRounded from '@mui/icons-material/NotificationAdd';
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const Notification = () => {
  const [anchor, setAnchor] = useState(null);
  const [badge, setBadge] = useState(2);

  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
    setBadge(0);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <StyledBadge badgeContent={badge} color="primary">
        <IconButton onClick={handleOpen}>
          <NotificationsActiveRounded sx={{ width: '30px', height: '30px' }} />
        </IconButton>
      </StyledBadge>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <List sx={{ width: '100%', maxWidth: 360 }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/men/0.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Phan Huy Manh liked your post"
              secondary="21 minute ago"
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://randomuser.me/api/portraits/women/26.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Phan Huy Manh commented on your post"
              secondary="1 minute ago"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Menu>
    </>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 8,
    top: 35,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#EA2D50',
    color: '#F0EBF2',
  },
}));

export default Notification;
