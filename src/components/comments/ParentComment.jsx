import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import Comment from '.';

const ParentComment = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Comment isParent={true} />

      {open && (
        <Box sx={{ ml: '50px' }}>
          {[0].map((item, index) => (
            <Comment key={index} isParent={false} />
          ))}
        </Box>
      )}

      <ButtonBase variant="text" onClick={onClick}>
        <Typography variant="string" color="#898989" fontWeight="bold">
          View more replies(1) <span>&or;</span>
        </Typography>
      </ButtonBase>
    </Box>
  );
};

export default ParentComment;
