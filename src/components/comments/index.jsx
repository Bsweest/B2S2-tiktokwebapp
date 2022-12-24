import {
  changeReplyComment,
  useIsReply,
} from '@/templates/global/ListVideoStates';
import getFirstLetter from '@/templates/hooks/getFirstLetter';
import getRelativeTime from '@/templates/hooks/getRelativeTime';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useQueryCommentServices } from 'backend/services/GetComments';
import useQueryUserData from 'backend/services/ProfileServices';

import CommentHeartButton from './CommentHeartButton';

const Comment = ({ isParent, data }) => {
  const { id: cmid, created_at, uid, content, parent_id, reply_to } = data;
  const isReplied = useIsReply(cmid);

  const { data: commenter, isSuccess: cd1 } = useQueryUserData(uid);
  const { data: services, isSuccess: cd2 } = useQueryCommentServices(cmid);

  const reply = () => {
    const dis = isParent ? null : commenter.displayname;
    const pid = isParent ? cmid : parent_id;

    changeReplyComment(commenter.displayname, dis, pid, cmid);
  };

  return (
    <>
      {cd1 && cd2 ? (
        <Box
          className="flex row"
          sx={{
            mb: '5px',
            p: '5px',
            borderRadius: '20px',
            backgroundColor: isReplied ? '#203F65' : null,
          }}
        >
          <Avatar
            alt="avatar"
            src={commenter.avatar_url}
            sx={{ width: isParent ? 38 : 30, height: isParent ? 38 : 30 }}
          >
            {getFirstLetter(commenter.displayname)}
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
              <ButtonBase onClick={reply}>
                <Typography variant="subtitle2">Reply</Typography>
              </ButtonBase>
            </Box>
          </Box>

          <CommentHeartButton services={services} cmid={cmid} />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
