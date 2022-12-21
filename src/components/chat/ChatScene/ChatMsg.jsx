import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import useMsgStyles from './DefaultStyles';

const ChatMsg = ({ avatarUrl, messages, side }) => {
  const styles = useMsgStyles();

  const attachClass = (index) => {
    const style = {};
    if (index === 0) {
      Object.assign(style, { ...styles[`${side}First`] });
    }
    if (index === messages.length - 1) {
      Object.assign(style, { ...styles[`${side}Last`] });
    }
    return style;
  };

  return (
    <Grid
      container
      sx={{
        justifyContent: side === 'right' ? 'flex-end' : 'flex-start',
        mt: '8px',
      }}
    >
      {side === 'left' && (
        <Grid item>
          <Avatar src={avatarUrl} sx={styles.avatar} />
        </Grid>
      )}
      <Grid item xs={8}>
        <Box className="flex" sx={{ flex: 1, flexDirection: 'column-reverse' }}>
          {messages.map((msg, index) => {
            return (
              <Box key={msg.id || index} sx={styles[`${side}Row`]}>
                <Typography
                  sx={{
                    ...styles.msg,
                    ...styles[side],
                    ...attachClass(index),
                  }}
                >
                  {msg}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

ChatMsg.propTypes = {
  avatar: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  side: PropTypes.oneOf(['left', 'right']),
  GridContainerProps: PropTypes.shape({}),
  GridItemProps: PropTypes.shape({}),
  AvatarProps: PropTypes.shape({}),
  getTypographyProps: PropTypes.func,
};
ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
  GridContainerProps: {},
  GridItemProps: {},
  AvatarProps: {},
  getTypographyProps: () => ({}),
};

export default ChatMsg;
