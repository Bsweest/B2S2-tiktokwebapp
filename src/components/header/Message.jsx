import { SendRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';

const Message = () => {
  return (
    <Box sx={{ marginRight: '-10px' }}>
      <StyledBadge badgeContent={4} color="primary">
        <IconButton>
          <SendRounded sx={{ width: '30px', height: '30px' }} />
        </IconButton>
      </StyledBadge>
    </Box>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 8,
    top: 35,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#EA2D50',
    color: '#F0EBF2',
  },
}));

export default Message;
