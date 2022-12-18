import HeadphonesIcon from '@mui/icons-material/Headphones';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Description = () => {
  return (
    <Box
      className="flex col"
      sx={{
        color: 'white',
        pointerEvents: 'auto',
      }}
    >
      <Typography sx={{ fontSize: '1.25rem' }} variant="string">
        @original_poster
      </Typography>

      <Typography sx={{ fontSize: '1.15rem' }} variant="string">
        content
      </Typography>

      <Box className="flex row" sx={{ alignItems: 'center' }}>
        <HeadphonesIcon sx={{ width: 30, height: 30, marginRight: '7px' }} />
        <Typography sx={{ fontSize: '1.15rem' }} variant="string">
          music 1 2 3 4
        </Typography>
      </Box>
    </Box>
  );
};

export default Description;
