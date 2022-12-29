import HeadphonesIcon from '@mui/icons-material/Headphones';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import LoadingButton from '@mui/lab/LoadingButton';
import { Dialog } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useQueryCommentSection } from 'backend/services/GetComments';
import useQueryUserData from 'backend/services/ProfileServices';
import { supabase } from 'backend/supabase';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import ListComment from '../comments/ListComment';

const SideBarShortDetail = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteShareShort = async () => {
    setShowDialog(false);
  };

  const ac = new AbortController();

  const { id: ssid, created_at, op_id, uri, caption, music } = data;

  const { data: listComment, isSuccess: cd1 } = useQueryCommentSection(
    ssid,
    null,
    ac,
    true,
  );
  const { data: opData, isSuccess: cd2 } = useQueryUserData(op_id);

  useEffect(() => {
    return () => {
      ac.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex col">
      <Dialog open={showDialog}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 60px 40px 60px',
            marginBottom: '65px',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#cfcfcf',
              marginBottom: '10px',
            }}
          >
            Delete video
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              color: '#9f9f9f',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            Your video will be permanently deleted
          </Typography>

          <WarningRoundedIcon
            sx={{
              marginTop: '70px',
              width: '150px',
              height: '150px',
              color: '#f1c300',
            }}
          />
          <Box
            sx={{
              height: 65,
              width: '100%',
              position: 'absolute',
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                textTransform: 'none',
                p: '6px',
                backgroundColor: '#b8b8b8',
                '&:hover': {
                  backgroundColor: '#838383',
                },
                color: 'black',
                width: '100px',
                marginRight: '15px',
              }}
              variant="contained"
              onClick={() => {
                setShowDialog(false);
              }}
            >
              Cancel
            </Button>
            {loading ? (
              <LoadingButton sx={{ width: '100px' }} loading variant="outlined">
                Submit
              </LoadingButton>
            ) : (
              <Button
                sx={{
                  textTransform: 'none',
                  p: '6px',
                  backgroundColor: '#FE2C55',
                  '&:hover': {
                    backgroundColor: '#a80022',
                  },
                  color: 'white',
                  width: '100px',
                }}
                variant="contained"
                onClick={handleDeleteShareShort}
              >
                OK
              </Button>
            )}
          </Box>
        </Box>
      </Dialog>
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
            </Grid>

            <Typography variant="string" sx={{ my: '1rem' }}>
              {caption}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HeadphonesIcon
                sx={{ width: 30, height: 30, marginRight: '7px' }}
              />
              <Link className="link" href="/about">
                Music
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
        sx={{ backgroundColor: '#121212', pt: '0.5rem', px: '0.5rem', flex: 1 }}
      >
        <ListComment list={listComment} />
      </Box>
    </div>
  );
};

export default SideBarShortDetail;
