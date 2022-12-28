import { CheckAuth } from '@/templates/global/CheckAuth';
import { unReply, useGetReply } from '@/templates/global/ListVideoStates';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { init } from 'emoji-mart';
import { useState } from 'react';

init({ data });

const ContentInput = ({ sendFn }) => {
  const [value, setValue] = useState('');
  const [showIcon, setShowIcon] = useState(false);

  const { show, displayname, parentID } = useGetReply();

  const toggleIconPicker = () => {
    setShowIcon((prev) => !prev);
  };
  const closeIconPicker = () => {
    if (showIcon) setShowIcon(false);
  };

  const onTextChange = ({ target }) => {
    setValue(target.value);
  };
  const addEmoji = ({ native }) => {
    setValue((prev) => prev + native);
  };

  const submitText = () => {
    if (!CheckAuth()) return;

    if (!value) return;
    sendFn(value, parentID, displayname);
    setValue('');
    unReply();
  };

  const onKeyPress = ({ code }) => {
    if (code === 'Enter') submitText();
  };

  const deSelectReply = () => {
    unReply();
  };

  return (
    <Box
      className="flex col"
      sx={{
        position: 'relative',
        width: '100%',
        borderTop: '1px solid lightgrey',
      }}
    >
      {show ? (
        <Box
          className="flex row"
          sx={{
            pl: '1rem',
            gap: '5px',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1">replying</Typography>
          <Typography variant="string">{show}</Typography>
          <IconButton
            sx={{ width: '25px', height: '25px' }}
            onClick={deSelectReply}
          >
            <CancelRoundedIcon
              sx={{
                width: '20px',
                height: '20px',
                '&:hover': {
                  color: 'gray',
                },
              }}
            />
          </IconButton>
        </Box>
      ) : (
        <></>
      )}

      <Box
        className="flex row"
        sx={{
          width: '100%',
          height: '2.6rem',

          px: '1rem',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <InputBase
          sx={{
            flex: 1,
            borderRadius: '10rem',
            backgroundColor: '#3A3B3C',
            px: '0.7rem',
          }}
          value={value}
          onChange={onTextChange}
          onKeyDown={onKeyPress}
        />
        <IconButton
          aria-label="icon"
          sx={{ p: '5px' }}
          onClick={toggleIconPicker}
        >
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton aria-label="icon" sx={{ p: '5px' }} onClick={submitText}>
          <SendRoundedIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: showIcon ? 'block' : 'none',
          position: 'absolute',
          right: 0,
          top: 0,
          transform: 'translate(-20% ,-110%)',
        }}
      >
        <Picker
          data={data}
          previewPosition="none"
          maxFrequentRows={1}
          onClickOutside={closeIconPicker}
          onEmojiSelect={addEmoji}
        />
      </Box>
    </Box>
  );
};

export default ContentInput;
