import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Messages = () => {
  return (
    <Container
      sx={{ display: 'flex', height: '100%', py: '20px' }}
      maxWidth="lg"
    >
      <Box
        sx={{
          width: '350px',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
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
              sx={{ borderRadius: '1rem', boxShadow: 'none' }}
            >
              Friend
            </Button>
            <Button sx={{ borderRadius: '1rem', boxShadow: 'none' }}>
              Stranger
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  );
};

export default Messages;
