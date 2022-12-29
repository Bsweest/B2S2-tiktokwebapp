import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  Dialog,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import AddVideo from 'backend/mutation/AddVideo';
import Image from 'mui-image';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const UploadVideo = () => {
  const [loading, setLoading] = useState(false);
  const [videoLocal, setVideoLocal] = useState();
  const [imageLocal, setImageLocal] = useState();
  const [valid, setValid] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const caption = useRef();
  const music = useRef();

  const getLocalImage = (e) => {
    setImageLocal(e.target.files[0]);
  };

  const getLocalVideo = (e) => {
    setVideoLocal(e.target.files[0]);
  };

  const uploadVideo = async () => {
    if (!videoLocal) return;
    setLoading(true);
    const rs = await AddVideo(videoLocal, caption.current.value);
    setLoading(false);
    setShowDialog(true);
    if (!rs) setValid(false);
  };

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
              url={URL.createObjectURL(videoLocal)}
              playing={false}
              width="50%"
              height="500px"
              controls
              style={{
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
                  backgroundColor: '#454545',
                  '&:hover': {
                    backgroundColor: '#525252',
                  },
                  color: 'white',
                  width: '150px',
                  marginTop: '120px',
                }}
                variant="contained"
                component="label"
              >
                Select file
                <input
                  type="file"
                  accept="video/mp4, video/x-m4v, video/*"
                  hidden
                  onChange={getLocalVideo}
                />
              </Button>
            </Box>
          )}

          <Box sx={{ width: '50%', marginLeft: '10px' }}>
            <Box className="flex row">
              <Box sx={{ width: '50%', height: '255px' }}>
                <Typography sx={{ color: '#cfcfcf' }}>Thumbnail</Typography>
                {imageLocal ? (
                  <Box
                    sx={{
                      height: '200px',
                      width: '200px',
                      borderRadius: '10px',
                      margin: '12px 12px 12px 0px',
                    }}
                  >
                    <Image
                      sx={{ borderRadius: '10px' }}
                      src={URL.createObjectURL(imageLocal)}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      border: '1px solid #bbbbbb',
                      margin: '12px 12px 12px 0px',
                      padding: '10px',
                      borderRadius: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      height: '200px',
                    }}
                  >
                    <CloudUploadRoundedIcon
                      sx={{ width: '30px', height: '30px' }}
                    />
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#cfcfcf',
                        margin: '20px 0px 20px 0px',
                      }}
                    >
                      Select image to upload
                    </Typography>
                    <Button
                      sx={{
                        textTransform: 'none',
                        p: '4px',
                        backgroundColor: '#454545',
                        '&:hover': {
                          backgroundColor: '#525252',
                        },
                        color: 'white',
                        width: '150px',
                      }}
                      variant="contained"
                      component="label"
                    >
                      Select file
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={getLocalImage}
                      />
                    </Button>
                  </Box>
                )}
              </Box>

              <Box>
                <Typography sx={{ color: '#cfcfcf' }}>Music</Typography>
                <TextField
                  size="small"
                  inputRef={music}
                  sx={{
                    width: '100%',
                    margin: '12px 0px 12px 0px',
                    '& label.Mui-focused': {
                      color: '#707070',
                    },
                  }}
                />
              </Box>
            </Box>

            <Typography sx={{ color: '#cfcfcf' }}>Caption</Typography>
            <TextField
              inputRef={caption}
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
                  setVideoLocal(null);
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
              <></>
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
