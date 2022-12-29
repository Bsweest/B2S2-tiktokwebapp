import notification, {
  resetNoti,
} from '@/templates/global/NotificationPersist';
import getRelativeTime from '@/utils/getRelativeTime';
import { For } from '@legendapp/state/react';
import NotificationsActiveRounded from '@mui/icons-material/NotificationAdd';
import {
  Avatar,
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import useQueryUserData from 'backend/services/ProfileServices';
import useListenCommentSection from 'backend/services/RealTimeComment';
import Link from 'next/link';
import { useState } from 'react';

const Row = ({ item }) => {
  const { uid, event, ssid, content } = item;

  const { data, isSuccess } = useQueryUserData(uid);

  const textPri = data
    ? event === 0
      ? `${data.displayname} comments on your short`
      : `${data.displayname} likes your short`
    : null;

  const textSe = getRelativeTime(item.at);

  return (
    <>
      {isSuccess ? (
        <Link href={`/short/${ssid}`}>
          <ListItem
            sx={{ borderBottom: '1px solid lightgrey' }}
            alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar src={data.avatar_url} />
            </ListItemAvatar>
            <ListItemText primary={textPri} secondary={textSe} />
          </ListItem>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

const Notification = () => {
  const [anchor, setAnchor] = useState(null);

  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
    resetNoti();
  };

  const handleClose = () => {
    setAnchor(null);
  };

  // useListenCommentSection();

  return (
    <>
      <StyledBadge badgeContent={notification.num.get()} color="primary">
        <IconButton onClick={handleOpen}>
          <NotificationsActiveRounded sx={{ width: '30px', height: '30px' }} />
        </IconButton>
      </StyledBadge>
      <Menu
        sx={{
          mt: '45px',
          display: notification.arr.get().length ? 'flex' : 'none',
        }}
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
          <For each={notification.arr} item={Row} />
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
