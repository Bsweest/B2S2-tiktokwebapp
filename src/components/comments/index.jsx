import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import { useQueryCommentServices } from '../../../backend/services/GetComments';
import useQueryUserData from '../../../backend/services/ProfileServices';
import getFirstLetter from '../../templates/hooks/getFirstLetter';
import getRelativeTime from '../../templates/hooks/getRelativeTime';
import CommentHeartButton from './CommentHeartButton';

const Comment = ({ isParent, data }) => {
  const { id: cmid, created_at, uid, content, parent_id } = data;

  const { data: commenter, isSuccess: cd1 } = useQueryUserData(uid);
  const { data: services, isSuccess: cd2 } = useQueryCommentServices(cmid);

  return (
    <>
      {cd1 && cd2 ? (
        <Box className="flex row" sx={{ mb: '5px' }}>
          <Avatar
            alt="avatar"
            src={commenter.avatar_url}
            sx={{ width: isParent ? 38 : 30, height: isParent ? 38 : 30 }}
          >
            {}
          </Avatar>
          <Box className="flex col" sx={{ flex: 1, ml: '7px' }}>
            <Typography variant="string" color="white" component="h6">
              {commenter.displayname}
            </Typography>
            <Typography variant="string" color="white">
              {content}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '50px',
                mt: '2px',
              }}
            >
              <Typography variant="subtitle2">
                {getRelativeTime(created_at)}
              </Typography>
              <ButtonBase>
                <Typography variant="subtitle2">Reply</Typography>
              </ButtonBase>
            </Box>
          </Box>

          <CommentHeartButton services={services} />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
