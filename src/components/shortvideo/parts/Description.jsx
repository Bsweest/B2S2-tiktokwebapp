import HeadphonesIcon from '@mui/icons-material/Headphones';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Description = ({ data }) => {
  const { opData, caption, music } = data;

  return (
    <Box
      className="flex col"
      sx={{
        color: 'white',
        width: '4rem',
        overflow: 'visible',
        alignItems: 'flex-start',
        mb: '3rem',
        zIndex: 15,
      }}
    >
      <Box
        className="flex col"
        sx={{ width: '400px', transform: 'translateX(-30%)' }}
      >
        <Box className="flex" sx={{ alignItems: 'flex-end', gap: '3px' }}>
          <Typography
            sx={{
              fontSize: '1.2rem',
              pointerEvents: 'auto',
            }}
            variant="string"
            component="h6"
          >
            {opData.displayname}
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              pointerEvents: 'auto',
            }}
            variant="subtitle2"
          >
            @{opData.username}
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: '1.15rem', pointerEvents: 'auto' }}
          variant="string"
        >
          {caption}
        </Typography>

        <Box
          className="flex row"
          sx={{ alignItems: 'center', pointerEvents: 'auto' }}
        >
          <HeadphonesIcon sx={{ width: 30, height: 30, marginRight: '7px' }} />
          <Typography sx={{ fontSize: '1.15rem' }} variant="string">
            music 1 2 3 4
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Description;
