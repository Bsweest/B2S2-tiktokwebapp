import options from '@/assets/music';
import { clientID } from '@/templates/global/ClientData';
import { useSelector } from '@legendapp/state/react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { deleteVideo } from 'backend/mutation/AddVideo';
import useMutateComment from 'backend/mutation/CommentMutation';
import { useQueryCommentSection } from 'backend/services/GetComments';
import useQueryUserData from 'backend/services/ProfileServices';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ListComment from '../comments/ListComment';
import ContentInput from '../content_input';
import ShortDialog from '../dialog/ShortDialog';

const SideBarShortDetail = ({ data }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const ac = new AbortController();

  const { id: ssid, created_at, op_id, uri, caption, music } = data;

  const { data: listComment, isSuccess: cd1 } = useQueryCommentSection(
    ssid,
    null,
    ac,
    true,
  );
  const { data: opData, isSuccess: cd2 } = useQueryUserData(op_id);

  const isClient = useSelector(() => clientID.get() === op_id);

  const { mutate, isLoading } = useMutateComment();

  const addComment = (content, p_id, reply_to) => {
    mutate({ content, fetchID: ssid, p_id, reply_to, op_id });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteShareShort = async () => {
    setLoading(true);
    await deleteVideo(ssid);
    router.push('/');
  };

  useEffect(() => {
    return () => {
      ac.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex col">
      <ShortDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        loading={loading}
        handleDeleteShareShort={handleDeleteShareShort}
      />

      <Box
        className="flex col"
        sx={{
          width: '500px',
          borderBottom: '1px solid lightgrey',
          px: '2rem',
          mt: '2rem',
        }}
      >
        {cd2 ? (
          <>
            <Grid
              container
              sx={{
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'nowrap',
              }}
            >
              <Avatar sx={{ width: '50px', height: '50px' }} />
              <Grid
                xs={9}
                item
                className="flex row"
                sx={{
                  flex: 1,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '5px',
                }}
              >
                <Typography
                  textOverflow="ellipsis"
                  variant="string"
                  component="h6"
                >
                  {opData.displayname}
                </Typography>
                <Typography textOverflow="ellipsis" variant="subtitle1">
                  @{opData.username}
                </Typography>
              </Grid>

              {isClient && (
                <Box>
                  <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem
                      onClick={() => {
                        setShowDialog(true);
                      }}
                    >
                      <Typography>Delete</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Link href={`/update/${ssid}`}>Edit</Link>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Grid>

            <Typography variant="string" sx={{ my: '1rem' }}>
              {caption}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HeadphonesIcon
                sx={{ width: 30, height: 30, marginRight: '7px' }}
              />
              <Link className="link" href="/">
                {options[music].label}
              </Link>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: '5px',
                my: '1rem',
                borderRadius: '12px',
                border: '1px solid lightgrey',
              }}
            >
              <Typography
                sx={{ flex: 1 }}
                textOverflow="ellipsis"
                noWrap
                variant="subtitle1"
              >
                {`http://localhost:3000/short/${ssid}`}
              </Typography>
              <Button sx={{ textTransform: 'none', fontWeight: 'bold' }}>
                Copy Link
              </Button>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>

      <Box
        className="flex col"
        sx={{ backgroundColor: '#121212', pt: '0.5rem', px: '0.5rem', flex: 1 }}
      >
        <ListComment list={listComment} />

        <ContentInput sendFn={addComment} />
      </Box>
    </div>
  );
};

export default SideBarShortDetail;
