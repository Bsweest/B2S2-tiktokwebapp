import OpenDialog from '@/components/auth/Login/OpenLoginDialogBtn';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Card,
  Dialog,
  IconButton,
  TextField,
  Typography,
  video,
} from '@mui/material';
import { Box } from '@mui/system';
import { supabase } from 'backend/supabase';
import dayjs from 'dayjs';
import Randomstring from 'randomstring';
import React from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const UploadVideo = () => {
  const [loading, setLoading] = useState(false);
  const [videoUpload, setvideoUpload] = useState('');
  const [videoLocal, setvideoLocal] = useState();
  const [valid, setValid] = useState(true);
  const [caption, setCaption] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleChangeCaption = (event) => {
    setCaption(event.target.value);
  };

  const getLocalVideo = (e) => {
    const obj = URL.createObjectURL(e.target.files[0]);
    setvideoUpload(obj);
    setvideoLocal(e.target.files[0]);
  };

  async function uploadVideo() {
    const id = window.localStorage.getItem('userId');
    const randomString = Randomstring.generate();

    if (videoLocal) {
      setLoading(true);
      await supabase.storage
        .from('shareshorts')
        .upload(randomString, videoLocal);
      const url = supabase.storage
        .from('shareshorts')
        .getPublicUrl(randomString);
      await supabase.from('shareshorts').insert({
        created_at: dayjs(),
        op_id: id,
        uri: url.data.publicUrl,
        caption: caption,
      });
      setLoading(false);
      setShowDialog(true);
    } else setValid(false);
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
            Upload video
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              color: '#9f9f9f',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            Your video has been uploaded to your profile
          </Typography>

          <TaskAltIcon
            sx={{
              marginTop: '70px',
              width: '150px',
              height: '150px',
              color: 'green',
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
                backgroundColor: '#FE2C55',
                '&:hover': {
                  backgroundColor: '#a80022',
                },
                color: 'white',
                width: '100px',
              }}
              variant="contained"
              onClick={() => {
                location.reload();
              }}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Dialog>
      <Card sx={{ width: '1000px', margin: '10px', padding: '30px' }}>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#cfcfcf',
            marginBottom: '15px',
          }}
        >
          Upload video
        </Typography>
        <Typography sx={{ color: '#b8b8b8', marginBottom: '15px' }}>
          Post a video to your account
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {videoLocal ? (
            <ReactPlayer
              url={videoUpload}
              playing={true}
              width=" 50%"
              height="500px"
              controls
              style={{
                backgroundColor: '#cfcfcf',
                marginRight: '10px',
                borderRadius: '10px',
              }}
            />
          ) : (
            <Box
              sx={{
                width: '50%',
                height: '500px',
                border: '1px solid #bbbbbb',
                marginRight: '10px',
                padding: '50px 20px 50px 20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CloudUploadRoundedIcon sx={{ width: '60px', height: '60px' }} />
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#cfcfcf',
                  margin: '20px 0px 20px 0px',
                }}
              >
                Select video to upload
              </Typography>
              <Typography sx={{ color: '#b8b8b8' }}>Mp4 or WebM</Typography>
              <Typography sx={{ color: '#b8b8b8' }}>Less than 2GB</Typography>
              <Button
                sx={{
                  textTransform: 'none',
                  p: '6px',
                  backgroundColor: '#FE2C55',
                  '&:hover': {
                    backgroundColor: '#a80022',
                  },
                  color: 'white',
                  width: '150px',
                  marginTop: '120px',
                }}
                variant="contained"
                component="label"
              >
                Select file
                <input type="file" hidden onChange={getLocalVideo} />
              </Button>
            </Box>
          )}

          <Box sx={{ width: '50%', marginLeft: '10px' }}>
            <Typography sx={{ color: '#cfcfcf' }}>Caption</Typography>
            <TextField
              value={caption}
              onChange={handleChangeCaption}
              size="small"
              multiline
              rows={5}
              sx={{
                width: '100%',
                margin: '12px 0px 12px 0px',
                '& label.Mui-focused': {
                  color: '#707070',
                },
              }}
            />
            <Typography sx={{ fontSize: '12px', color: '#b8b8b8' }}>
              Max 1000 characters
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                sx={{
                  textTransform: 'none',
                  p: '6px',
                  color: '#b8b8b8',
                  borderColor: '#b8b8b8',
                  marginRight: '12px',
                  width: '100px',
                }}
                variant="outlined"
                onClick={() => {
                  setvideoLocal(null);
                  setvideoUpload('');
                }}
              >
                Discard
              </Button>
              {loading ? (
                <LoadingButton
                  sx={{ width: '100px' }}
                  loading
                  variant="outlined"
                >
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
                  onClick={uploadVideo}
                >
                  Post
                </Button>
              )}
            </Box>
            {valid ? (
              <Box />
            ) : (
              <Typography
                sx={{
                  marginTop: '12px',
                  color: '#FE2C55',
                }}
              >
                You have not uploaded your video yet
              </Typography>
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default UploadVideo;
