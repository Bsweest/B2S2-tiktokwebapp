import { observable } from '@legendapp/state';
import { persistObservable } from '@legendapp/state/persist';
import SendRounded from '@mui/icons-material/SendRounded';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import useQueryUserData from 'backend/services/ProfileServices';
import { useListenToAllChat } from 'backend/services/RealTimeChat';
import Link from 'next/link';
import { toast } from 'react-toastify';

const CustomToast = (payload) => {
  const { data } = useQueryUserData(payload.sender);

  return (
    <div>
      New messages from <strong>{data ? data.displayname : null}</strong>{' '}
      {payload.content}
    </div>
  );
};

const countNoti = observable(0);

// persistObservable(countNoti, {
//   local: 'notiChat',
// });

const Message = () => {
  const addNoti = (payload) => {
    countNoti.set((prev) => ++prev);
    toast(<CustomToast data={payload} />);
  };

  const resetNoti = () => {
    countNoti.set(0);
  };

  useListenToAllChat(addNoti, resetNoti);

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
