import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import FlatList from 'flatlist-react';
import { useState } from 'react';

import Comment from '.';

const ParentComment = () => {
  const [open, setOpen] = useState(false);
  const data = [1];

  const onClick = () => {
    setOpen((prev) => !prev);
  };

  const renderItem = (item, index) => {
    return <Comment key={index} />;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: '2px' }}>
      <Comment isParent={true} />

      {open && (
        <Box sx={{ ml: '50px' }}>
          <FlatList list={data} renderItem={renderItem} />
        </Box>
      )}

      <ButtonBase onClick={onClick}>
        <Typography variant="string" color="#898989" component="h6">
          {open ? 'Hide replies' : `View more replies(1)`}
        </Typography>
      </ButtonBase>
    </Box>
  );
};

export default ParentComment;
