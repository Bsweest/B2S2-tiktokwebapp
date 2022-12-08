import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ShortVideo = () => {
  return (
    <Box
      style={{
        height: 600,
        width: '90%',
        padding: 10,
        borderBottom: '1px solid lightgray',
        display: 'flex',
      }}
    >
      <Box style={{ width: '8%' }}>
        <Avatar
          style={{ width: 56, height: 56 }}
          src="https://randomuser.me/api/portraits/men/27.jpg"
        />
      </Box>
      <Box style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography
            style={{ fontWeight: 'bold', fontSize: 17, fontFamily: 'cursive' }}
          >
            datvilla94
          </Typography>
          <Typography
            style={{ fontSize: 15, paddingLeft: 5, alignSelf: 'end' }}
          >
            Do Van Dat
          </Typography>
        </Box>
        <Typography style={{ fontFamily: 'sans-serif' }}>
          Thà rằng người hãy nói hết #title
        </Typography>
        <Typography style={{ fontWeight: 'revert', fontFamily: 'serif' }}>
          ♫ nhạc nền - Faded
        </Typography>
        <Box style={{ height: '100%', display: 'flex', marginTop: 10 }}>
          <CardMedia
            component="img"
            image="https://picsum.photos/400/300"
            alt="CardMedia Image Example"
            style={{ width: '80%', height: '100%', borderRadius: 10 }}
          />
          <Box style={{ width: '20%', alignSelf: 'end', marginLeft: 15 }}>
            <Box
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 5,
              }}
            >
              <Avatar
                vatar
                style={{ width: 56, height: 56, backgroundColor: 'lightgray', cursor: 'pointer', color: 'black' }}
              >
                <FavoriteIcon/>
              </Avatar>
            </Box>
            <Typography
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 5,
              }}
            >
              195212
            </Typography>

            <Box
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 5,
              }}
            >
              <Avatar
                vatar
                style={{ width: 56, height: 56, backgroundColor: 'lightgray', cursor: 'pointer', color: 'black' }}
              >
                <ChatIcon/>
              </Avatar>
            </Box>
            <Typography
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 5,
              }}
            >
              2951
            </Typography>

            <Box
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 5,
              }}
            >
              <Avatar
                vatar
                style={{ width: 56, height: 56, backgroundColor: 'lightgray', cursor: 'pointer', color: 'black' }}
              >
                <ShareIcon/>
              </Avatar>
            </Box>
            <Typography
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 5,
              }}
            >
              1102
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box style={{ width: '42%', display: 'flex', justifyContent: 'right' }}>
        <Button
          style={{ height: 30, margin: 20, color: 'red', borderColor: 'red' }}
          variant="outlined"
        >
          Follow
        </Button>
      </Box>
    </Box>
  );
};

export default ShortVideo;
