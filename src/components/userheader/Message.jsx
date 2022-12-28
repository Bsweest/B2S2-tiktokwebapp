import { useObservable } from '@legendapp/state/react';
import SendRounded from '@mui/icons-material/SendRounded';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useListenToAllChat } from 'backend/services/RealTimeChat';
import Link from 'next/link';
import { toast } from 'react-toastify';

const CustomToast = (displayname) => {
  return (
    <div>
      New messages from <strong>{displayname}</strong>{' '}
    </div>
  );
};

const Message = () => {
  const countNoti = useObservable(0);

  const addNoti = (displayname) => {
    countNoti.set((prev) => ++prev);
    toast(<CustomToast displayname={displayname} />);
  };

  useListenToAllChat(addNoti);

  return (
    <Link href="/messages">
      <StyledBadge
        sx={{ marginRight: '-10px' }}
        badgeContent={countNoti.get()}
        color="primary"
      >
        <IconButton>
          <SendRounded sx={{ width: '30px', height: '30px' }} />
        </IconButton>
      </StyledBadge>
    </Link>
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

export default Message;
