import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { init } from 'emoji-mart';
import { useState } from 'react';

init({ data });

const ContentInput = ({ submitText }) => {
  const [value, setValue] = useState('');
  const [showIcon, setShowIcon] = useState(false);

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

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        className="flex row"
        sx={{
          width: '100%',
          height: '2.6rem',
          borderTop: '1px solid lightgrey',
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
        />
        <IconButton
          aria-label="icon"
          sx={{ p: '5px' }}
          onClick={toggleIconPicker}
        >
          <EmojiEmotionsIcon sx={{}} />
        </IconButton>
        <IconButton
          aria-label="icon"
          sx={{ p: '5px' }}
          onClick={() => submitText(value)}
        >
          <SendRoundedIcon sx={{}} />
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
