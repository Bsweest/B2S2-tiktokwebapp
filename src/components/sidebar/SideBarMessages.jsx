import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

import ListChat from '../chat/ListChat';

const SideBarMessages = ({}) => {
  return (
    <Box
      className="flex col"
      sx={{
        width: '350px',
        borderRadius: '12px',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        py: '5px',
        px: '1rem',
      }}
    >
      <Box
        sx={{
          height: '45px',
          alignItems: 'center',
          display: 'flex',
          gap: '2rem',
          borderBottom: '0.5px solid lightgrey',
        }}
      >
        <Typography
          variant="caption"
          color="initial"
          fontWeight="700"
          fontSize="1.5rem"
          fontFamily="Arial"
        >
          Messages
        </Typography>
        <ButtonGroup size="small" aria-label="small button group">
          <Button
            variant="contained"
            sx={{
              borderRadius: '1rem',
              boxShadow: 'none',
            }}
          >
            Friend
          </Button>
          <Button
            sx={{
              borderRadius: '1rem',
              boxShadow: 'none',
            }}
          >
            Stranger
          </Button>
        </ButtonGroup>
      </Box>

      <ListChat />
    </Box>
  );
};

export default SideBarMessages;
