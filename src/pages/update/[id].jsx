import options from '@/assets/music';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Dialog,
  TextField,
  Typography,
} from '@mui/material';
import { useMutateVideo } from 'backend/mutation/AddVideo';
import { useQuerySingleVideo } from 'backend/services/GetNewFeed';
import Image from 'mui-image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

const UpdateVideo = () => {
  const router = useRouter();
  const ssid = router.query.id;

  const { data } = useQuerySingleVideo(ssid);
  const [poster, setPoster] = useState();

  const [showDialog, setShowDialog] = useState(false);

  const caption = useRef();
  const [imageToChange, setImageToChange] = useState();
  const [music, setMusic] = useState(options[0]);

  const { mutate, isLoading, isSuccess, isError } = useMutateVideo();

  const updateVideo = () => {
    mutate({
      id: ssid,
      poster: imageToChange,
      caption: caption.current.value,
      music: music ? music.id : 0,
    });
  };

  const getLocalImage = (e) => {
    setImageToChange(e.target.files[0]);
    setPoster(URL.createObjectURL(e.target.files[0]));
  };

  const toggleDialog = useCallback(() => {
    setShowDialog((prev) => !prev);
  }, []);

  const init = useCallback(() => {
    setPoster(data.poster_uri);
    setMusic(options[data.music]);
    caption.current.value = data.caption;
    setImageToChange();
  }, [data]);

  useEffect(() => {
    if (data) init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (isSuccess) toggleDialog();
    if (isError) {
    }
  }, [isSuccess, isError, toggleDialog]);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Dialog open={showDialog} onClose={toggleDialog}>
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
            Update video
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              color: '#9f9f9f',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            Your video has been updated
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
              onClick={toggleDialog}
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
          <Box
            className="flex col"
            sx={{
              position: 'relative',
              height: '480px',
              width: '45%',
            }}
          >
            <Typography>Thumbnail</Typography>

            <Box
              className="flex"
              sx={{ position: 'relative', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  border: '1px solid #bbbbbb',
                  height: '400px',
                  mt: '4px',
                  borderRadius: '10px',
                }}
              >
                <Image
                  alt="poster"
                  sx={{ borderRadius: '10px' }}
                  src={poster}
                />
              </Box>
              <Box
                className="camera"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  gap: '12px',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
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
                      margin: '20px 0px 20px 0px',
                    }}
                  >
                    Select image to upload
                  </Typography>
                  <Typography>JPG, JPEG, ...</Typography>
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
                      accept="image/png, image/jpeg"
                      hidden
                      onChange={getLocalImage}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: '55%', marginLeft: '10px' }}>
            <Typography sx={{ color: '#cfcfcf' }}>Music</Typography>
            <Autocomplete
              id="combo-box"
              value={music}
              onChange={(_, v) => setMusic(v)}
              size="small"
              defaultValue={options[0]}
              sx={{
                width: '100%',
                margin: '12px 0px 12px 0px',
                '& label.Mui-focused': {
                  color: '#707070',
                },
              }}
              options={options}
              renderInput={(params) => <TextField {...params} />}
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
                onClick={init}
              >
                Discard
              </Button>
              {isLoading ? (
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
                  onClick={updateVideo}
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
