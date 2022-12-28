import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  Dialog,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'mui-image';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const UpdateVideo = () => {
  const [loading, setLoading] = useState(false);
  const [imageLocal, setImageLocal] = useState();
  const [showDialog, setShowDialog] = useState(false);

  const caption = useRef();
  const music = useRef();

  const getLocalImage = (e) => {
    setImageLocal(e.target.files[0]);
  };

  const getVideoInfo = async () => {};

  const updateVideo = async () => {};

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
            Your video has been updated to your profile
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
          Update video
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {imageLocal ? (
            <Box
              sx={{
                height: '480px',
                width: '45%',
                border: '1px solid #bbbbbb',
                marginRight: '10px',
                borderRadius: '10px',
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
                display: 'flex',
                flexDirection: 'column',
                width: '45%',
                gap: '12px',
              }}
            >
              <Typography sx={{ color: '#cfcfcf' }}>Thumbnail</Typography>
              <Box
                sx={{
                  height: '480px',
                  border: '1px solid #bbbbbb',
                  marginRight: '10px',
                  padding: '50px 20px 50px 20px',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CloudUploadRoundedIcon
                  sx={{ width: '60px', height: '60px' }}
                />
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#cfcfcf',
                    margin: '20px 0px 20px 0px',
                  }}
                >
                  Select image to upload
                </Typography>
                <Typography sx={{ color: '#b8b8b8' }}>
                  JPG, JPEG, ...
                </Typography>
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
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={getLocalImage}
                  />
                </Button>
              </Box>
            </Box>
          )}

          <Box sx={{ width: '55%', marginLeft: '10px' }}>
            <Typography sx={{ color: '#cfcfcf' }}>Music</Typography>
            <TextField
              inputRef={music}
              size="small"
              sx={{
                width: '100%',
                margin: '12px 0px 12px 0px',
                '& label.Mui-focused': {
                  color: '#707070',
                },
              }}
            />

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
                  setImageLocal(null);
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
                >
                  Post
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default UpdateVideo;
