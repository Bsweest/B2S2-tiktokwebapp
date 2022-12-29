import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, Dialog, Typography } from '@mui/material';

const ShortDialog = ({
  showDialog,
  setShowDialog,
  loading,
  handleDeleteShareShort,
}) => {
  return (
    <Dialog open={showDialog}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 60px 40px 60px',
          marginBottom: '65px',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#cfcfcf',
            marginBottom: '10px',
          }}
        >
          Delete video
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
            color: '#9f9f9f',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Your video will be permanently deleted
        </Typography>

        <WarningRoundedIcon
          sx={{
            marginTop: '70px',
            width: '150px',
            height: '150px',
            color: '#f1c300',
          }}
        />
        <Box
          sx={{
            height: 65,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              textTransform: 'none',
              p: '6px',
              backgroundColor: '#b8b8b8',
              '&:hover': {
                backgroundColor: '#838383',
              },
              color: 'black',
              width: '100px',
              marginRight: '15px',
            }}
            variant="contained"
            onClick={() => {
              setShowDialog(false);
            }}
          >
            Cancel
          </Button>
          {loading ? (
            <LoadingButton sx={{ width: '100px' }} loading variant="outlined">
              Submit
            </LoadingButton>
          ) : (
            <Button
              sx={{
                textTransform: 'none',
                p: '6px',
                backgroundColor: '#FE2C55',
                '&:hover': {
                  backgroundColor: '#a80022',
                },
                color: 'white',
                width: '100px',
              }}
              variant="contained"
              onClick={handleDeleteShareShort}
            >
              OK
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default ShortDialog;
